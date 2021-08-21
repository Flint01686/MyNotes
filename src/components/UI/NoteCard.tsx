import React, { FC } from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addNoteForStore, removeNote, updNote } from '../../store/reducers/allNotesReducer';
import { NodeCardStyle } from '../../style/NoteCardSytle';
import { Note } from '../Interfaces/Note';
import { cloneOneNoteById, deleteNote, getOneNoteById } from '../Requests';
import TagInput from './TagInput'

const NoteCard: FC<Note> = ({attachments=[], tags=[], text="", id, ...other}) =>
{    
    const history = useHistory();
    const mainImgSrc = (process.env.REACT_APP_API_URL && attachments[0]) ? (
        process.env.REACT_APP_API_URL + attachments[0]) : "./default.png"
    const dispatch = useDispatch() 

    function deleteCurrentNote(e: any)
    {
        if (id)
        {
            deleteNote(id).then((res) => console.log(res)).catch((err) => history.push("/note/error/" + JSON.stringify(err)))
            dispatch(removeNote([id]))            
        }
        e.stopPropagation()
    }

    function cloneCurrentNote(e: any)
    {
        let currentNote: Note = { 
            attachments: attachments, 
            tags: tags, 
            text: text,
            ...other}
        if (id)
        {
            cloneOneNoteById(id).then(res =>
                dispatch(addNoteForStore([{ 
                    id: res.data.id,
                    ...currentNote}])))
        }
        // dispatch(addNoteForStore([{ 
        //     attachments: attachments, 
        //     tags: tags, 
        //     text: text,
        //     id: NaN,
        //     ...other}]))
        e.stopPropagation()
    }

    return (
        <NodeCardStyle>
            <Card className="card" onClick={(e: any) => {
                history.push(`/note/update/${id}`)
            }}>
                {attachments === [] ? null : 
                    <Card.Img variant="top" src={mainImgSrc}
                        crossOrigin="anonymous"/>  }
                <Card.Body>
                    <Card.Title>
                        <TagInput tags={tags} readonly={true}></TagInput>        
                    </Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
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