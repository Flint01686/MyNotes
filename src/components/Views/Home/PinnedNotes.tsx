import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { PinnedNotesStyle } from '../../../style/PinnedNotesStyle'
import { Note } from '../../Interfaces/Note';
import { getPinnedNotes } from '../../Requests';
import NoteCard from '../../UI/NoteCard'

export interface PinnedNotesI
{
    fullsize?: boolean
}

const PinnedNotes: FC<PinnedNotesI>  = ({ fullsize=false}) => 
{
    let notesState : unknown = useSelector<Array<Note>>((notes) => notes)

    let [AllPinnedNotes, setAllPinnedNotes] = useState<Array<Note>>([])
    
    useEffect(() => {                  
        getPinnedNotes().then((res) => setAllPinnedNotes(res.data))
    }, [notesState])
    return (
        <div>
            <PinnedNotesStyle fullsize={fullsize}>
                <h3>Pinned notes</h3>
                {AllPinnedNotes.map((note, index) => <NoteCard 
                    id={note.id}
                    key={index}
                    text={note.text}
                    attachments={note.attachments}
                    tags={note.tags}
                    isPinned={note.isPinned}></NoteCard>)}
            </PinnedNotesStyle>
        </div>      
    )
}
export default PinnedNotes