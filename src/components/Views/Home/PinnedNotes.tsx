import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';
import { PinnedNotesStyle } from '../../../style/PinnedNotesStyle'
import { Note } from '../../Interfaces/Note';
import { getPinnedNotes } from '../../Requests';
import { Loader } from '../../UI/Loader';
import NoteCard from '../../UI/NoteCard'

export interface PinnedNotesI
{
    fullsize?: boolean
}

const PinnedNotes: FC<PinnedNotesI>  = ({ fullsize=false}) => 
{
    let refresher : unknown = useSelector<RootState>((notes) => notes.refresher)
    const [refreshState, setRefreshState] = useState(false)

    let [AllPinnedNotes, setAllPinnedNotes] = useState<Array<Note>>([])
    
    useEffect(() => {     
        setRefreshState(true)         
        console.log("llor");
        
        getPinnedNotes().then((res) => { setRefreshState(false); setAllPinnedNotes(res.data); })
        
    }, [refresher])
    // if (refreshState) return(<Loader theme="dark"></Loader>)
    return (
        <div>
            <PinnedNotesStyle fullsize={fullsize}>
                <h3>Pinned notes</h3>
                {AllPinnedNotes.map((note, index) => <NoteCard 
                    key={index} 
                    note={note}
                    id={note.id ?? NaN}></NoteCard>)}
            </PinnedNotesStyle>
        </div>      
    )
}
export default PinnedNotes