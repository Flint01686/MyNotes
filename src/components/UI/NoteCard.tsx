import React, { FC, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { allNotesStateI } from '../../store/reducers/allNotesReducer';
import { pinNotesStateI } from '../../store/reducers/pinnedNotes';
import { RootState } from '../../store/reducers/rootReducer';
import { NodeCardStyle } from '../../style/NoteCardSytle';
import { Note } from '../Interfaces/Note';
import { cloneOneNoteById, deleteNote, RefreshByWS } from '../Requests';
import TagInput from './TagInput'

const NoteCard: FC<{id: number}> = ({id}) =>
{    
    let notesState : allNotesStateI = useSelector((notes: RootState) => notes.notes)
    let pinnedNotesState : pinNotesStateI = useSelector((notes: RootState) => notes.pinnedNotes)
    
    const brokenNote: Note = {
        text: "broken note",
        isPinned: true
    }
    
    const [currentNote, setCurrentNote] = useState<Note>(brokenNote)

    useEffect(() => {
        setCurrentNote(notesState.notes.find(note => note.id === id)
        ?? pinnedNotesState.pinnedNotes.find(note => note.id === id)
        ?? brokenNote)
    }, [notesState])

    const history = useHistory();
    const mainImgSrc = (
        currentNote.attachments && 
        currentNote.attachments[0]
        ) ? (
        process.env.REACT_APP_S3_BUCKET_URL + currentNote.attachments[0])
        : "./default.png"

    function deleteCurrentNote(e: any)
    {
        if (id)
        {
            deleteNote(id).then((res) => {                
                RefreshByWS();
            })
            .catch((err) => alert(err))
        }
        e.stopPropagation()
    }

    function cloneCurrentNote(e: any)
    {
        if (id)
        {
            cloneOneNoteById(id).then(res => RefreshByWS())
        }
        e.stopPropagation()
    }

    return (
        <NodeCardStyle>
            <Card className="card" onClick={(e: any) => {
                history.push(`/note/update/${id}`)
            }}>
                {currentNote.attachments === [] ? null : 
                    <Card.Img variant="top" src={mainImgSrc}/>  }
                <Card.Body>
                    <Card.Title>
                        <TagInput id={currentNote.id} readonly={true}></TagInput>        
                    </Card.Title>
                    <p>
                        {currentNote.text}
                    </p>
                    <div className="buttons_panel">
                    <button onClick={(e) => deleteCurrentNote(e)}>Delete</button>
                    <button className="clone" onClick={(e) => cloneCurrentNote(e)}>Clone</button>
                    </div>
                </Card.Body>
            </Card>
        </NodeCardStyle>   
    )
}
export default NoteCard