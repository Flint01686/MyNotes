import React, { FC, useEffect, useState } from 'react'
import { CreateNoteStyle } from '../../style/CreateNoteStyle'
import BaseLayout from '../layouts/BaseLayout'
import Submit from '../UI/Submit'
import TagInput from '../UI/TagInput'
import Gallery from 'react-photo-gallery'
import { addNote, getOneNoteById, RefreshByWS, updateNote } from '../Requests'
import { useHistory, useParams } from 'react-router-dom'
import { Note } from '../Interfaces/Note'
import { Loader } from '../UI/Loader'
import Unauthorized from '../UI/Unauthorized'

interface PhotosI{
    index: number;
}

const CreateNote: FC = () =>
{
    let { id } = useParams<{id: string}>();
    let numId = parseInt(id)
    const [currentNote, setCurrentNote] = useState<Note | null>(null)
    const [localAttachments, setLocalAttachments] = useState<Array<string>>([])
    const history = useHistory()
    const [refreshState, setRefreshState] = useState<boolean>(false)

    useEffect(() => {
        if (!Number.isNaN(numId))
        getOneNoteById(numId).then(res => setCurrentNote({
            ...res.data,
            attachments: res.data.attachments.map((attach: string) =>{
                setLocalAttachments(prev => prev.concat([attach]))
                return process.env.REACT_APP_S3_BUCKET_URL+attach})
        }))
        else setCurrentNote({
            isPinned: false,
            text: "",
            attachments: [],
            tags: []
        })

    }, [])

    const [files, setFiles] = useState<Array<File>>([])

    function createNote(event: React.FormEvent<HTMLFormElement>)
    {      
        if (currentNote)
        {
            setRefreshState(true)

            const NoteFormData = new FormData()
            NoteFormData.append("text", currentNote?.text)
            NoteFormData.append("isPinned", currentNote?.isPinned.toString())
            NoteFormData.append("tags", JSON.stringify(currentNote?.tags))
            files.map(file => NoteFormData.append("attachments", file))
            if (localAttachments !== []) {
                NoteFormData.append("localAttachments", JSON.stringify(
                    localAttachments?.filter(attach =>
                        currentNote.attachments?.includes(
                            process.env.REACT_APP_S3_BUCKET_URL+attach))))
            }
            
            
            console.log(currentNote, NoteFormData.entries);
            if (Number.isNaN(numId)) 
            addNote(NoteFormData)
                .then(res => { 
                    setRefreshState(false)
                    history.push('/'); 
                    RefreshByWS();
                })
                .catch(
                e => {if (e.response.data.statusCode === 401) localStorage.removeItem('accessToken')} )
            else {
                updateNote(numId, NoteFormData)
                    .then(res => { 
                        setRefreshState(false)
                        history.push('/'); 
                        RefreshByWS();
                    })
                    .catch(err => console.log(err))
            }
        }
        event.preventDefault()
    }

    function addFiles(event: React.ChangeEvent<HTMLInputElement>)
    {        
        if (!event.currentTarget.files) return;
        if (currentNote)
        {
            let currentFileList = Array.from(event.currentTarget.files); 
            setFiles(prev => prev.concat(currentFileList.map((item: File) => item)))
            setCurrentNote({
                ...currentNote,
                attachments: currentNote?.attachments?.concat(
                    currentFileList.map((item: File) => URL.createObjectURL(item)))
            })
        }
        event.currentTarget.value="";
    }
    
    function deleteFile(e: React.MouseEvent<Element, MouseEvent>, photos : PhotosI)
    {
        if (currentNote)
        {
            setFiles(prev =>  
                prev?.filter((item, index) => 
                index !== photos.index) )
            setCurrentNote({
                ...currentNote,
                attachments: currentNote?.attachments?.filter((item, index) => 
                index !== photos.index) ?? []
            })
        }
    }

    function changeText(e: React.ChangeEvent<HTMLTextAreaElement>)
    {
        if (currentNote)
            setCurrentNote({...currentNote, text: e.currentTarget.value})
    }
    
    function pinner(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (currentNote)
            setCurrentNote({
                ...currentNote,
                isPinned: !currentNote?.isPinned
            })
        return false;
    }
    if (refreshState) return <Loader></Loader>
    if (localStorage.getItem("accessToken"))
    return (
        <BaseLayout>
            {currentNote ? (
            <CreateNoteStyle>
                <form action="#" onSubmit={(event) => createNote(event)}>         
                    <div className="head">
                        <h3>Note Editor</h3>
                        <button 
                            type="button"
                            className={currentNote.isPinned ? "pinner active" : "pinner"}
                            onClick={(e) => pinner(e)}
                            title={currentNote.isPinned ? "Pinned" : "Unpinned"}
                        >Pin</button>
                    </div>
                    <div>
                        <h6>Text</h6>
                        <textarea onChange={(e) => changeText(e)} defaultValue={currentNote.text} required></textarea>
                    </div>
                    {currentNote.attachments ? <Gallery photos={
                        currentNote.attachments.map(attachment =>({
                            src: attachment,
                            width: 1,
                            height: 1,
                        }))
                    } onClick={(e, photos) => deleteFile(e, photos)}
                    />
                    : null}
                    <div className="block_inline">
                        <h6>Attachments:</h6>
                        <input type="file" multiple onChange={(event) => addFiles(event)}/>
                    </div>
                   
                    <div className="block_inline">
                        <h6>Tags:</h6>
                        <TagInput readonly={false} onChange={(newTags: Array<string>)=>{
                            setCurrentNote({
                                ...currentNote,
                                tags: newTags
                            })
                        }} tags={currentNote.tags ?? []}></TagInput>
                    </div>
                    
                    <Submit fontSize="32px" text="Save"></Submit>
                </form>
            </CreateNoteStyle>) : <Loader />}
        </BaseLayout>
    )
    else return <Unauthorized></Unauthorized>
}
export default CreateNote