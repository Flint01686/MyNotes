import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pinNotesStateI, setPinNote } from '../../../store/reducers/pinnedNotes';
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
    let pinnedNotesState : pinNotesStateI = useSelector((notes: RootState) => notes.pinnedNotes)
    const [refreshState, setRefreshState] = useState(false)
    const dispatch = useDispatch() 

    let [AllPinnedNotes, setAllPinnedNotes] = useState<Array<Note>>([])
    
    useEffect(() => {     
        setRefreshState(true)         
        
        
        getPinnedNotes().then((res) => { 
            setRefreshState(false); 
            dispatch(setPinNote(res.data)); setAllPinnedNotes(res.data); })
        
    }, [refresher])
    // if (refreshState) return(<Loader theme="dark"></Loader>)
    return (
        <div>
            <PinnedNotesStyle fullsize={fullsize}>
                <h3>Pinned notes</h3>
                {pinnedNotesState.pinnedNotes.map((note, index) => <NoteCard 
                    key={index} 
                    // note={note}
                    id={note.id ?? NaN}
                    ></NoteCard>)}
            </PinnedNotesStyle>
        </div>      
    )
}
export default PinnedNotes