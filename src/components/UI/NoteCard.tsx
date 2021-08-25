import React, { FC, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { allNotesStateI } from '../../store/reducers/allNotesReducer';
import { pinNotesStateI } from '../../store/reducers/pinnedNotes';
import { refresh } from '../../store/reducers/refreshReducer';
import { RootState } from '../../store/reducers/rootReducer';
import { NodeCardStyle } from '../../style/NoteCardSytle';
import { Note } from '../Interfaces/Note';
import { cloneOneNoteById, deleteNote } from '../Requests';
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
        process.env.REACT_APP_API_URL && 
        currentNote.attachments && 
        currentNote.attachments[0]
        ) ? (
        process.env.REACT_APP_API_URL + currentNote.attachments[0]) : "./default.png"
    const dispatch = useDispatch() 

    function deleteCurrentNote(e: any)
    {
        if (id)
        {
            deleteNote(id).then((res) => {                
                dispatch(refresh());
                // dispatch(removeNote([id]));            
            })
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
            <Card className="card" onClick={(e: any) => {
                history.push(`/note/update/${id}`)
            }}>
                {currentNote.attachments === [] ? null : 
                    <Card.Img variant="top" src={mainImgSrc}
                        crossOrigin="anonymous"/>  }
                <Card.Body>
                    <Card.Title>
                        <TagInput id={currentNote.id} readonly={true}></TagInput>        
                    </Card.Title>
                    <Card.Text>
                        {currentNote.text}
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