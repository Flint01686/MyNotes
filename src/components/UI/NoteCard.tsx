import React, { FC, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { removeNote } from '../../store/reducers/allNotesReducer';
import { refresh } from '../../store/reducers/refreshReducer';
import { RootState } from '../../store/reducers/rootReducer';
import { NodeCardStyle } from '../../style/NoteCardSytle';
import { Note } from '../Interfaces/Note';
import { cloneOneNoteById, deleteNote, getOneNoteById } from '../Requests';
import { NotesStateI } from '../Views/Home/Home';
import TagInput from './TagInput'

const NoteCard: FC<{id: number, note: Note}> = ({id, note}) =>
{    
    let notesState : unknown = useSelector<Array<Note>>((notes) => notes)
    let refresher : unknown = useSelector<RootState>((notes) => notes.refresher)

    const brokenNote: Note = {
        text: "broken note",
        isPinned: true
    }

    const history = useHistory();
    const mainImgSrc = (
        process.env.REACT_APP_API_URL && 
        note.attachments && 
        note.attachments[0]
        ) ? (
        process.env.REACT_APP_API_URL + note.attachments[0]) : "./default.png"
    const dispatch = useDispatch() 

    function deleteCurrentNote(e: any)
    {
        if (id)
        {
            // dispatch(removeNote([id]))            
            deleteNote(id)
                .then(() => { dispatch(refresh()) })
                .catch((err) => history.push("/note/error/" + JSON.stringify(err)))
        }
        e.stopPropagation()
    }

    function cloneCurrentNote(e: any)
    {
        if (id)
        {
            cloneOneNoteById(id).then(res => dispatch(refresh()))
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
            {console.log("crd", note)}
            <Card className="card" onClick={(e: any) => {
                history.push(`/note/update/${id}`)
            }}>
                {note.attachments === [] ? null : 
                    <Card.Img variant="top" src={mainImgSrc}
                        crossOrigin="anonymous"/>  }
                <Card.Body>
                    <Card.Title>
                        <TagInput tags={note.tags ?? []} readonly={true}></TagInput>        
                    </Card.Title>
                    <Card.Text>
                        {note.text}
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