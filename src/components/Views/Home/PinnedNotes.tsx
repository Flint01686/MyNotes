import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pinNotesStateI, setPinNote } from '../../../store/reducers/pinnedNotes';
import { RootState } from '../../../store/reducers/rootReducer';
import { PinnedNotesStyle } from '../../../style/PinnedNotesStyle'
import { getPinnedNotes } from '../../Requests';
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
    
    useEffect(() => {     
        setRefreshState(true)         
        
        
        getPinnedNotes().then((res) => { 
            setRefreshState(false); 
            dispatch(setPinNote(res.data));
        })
        
    }, [refresher])

    return (
        <div>
            <PinnedNotesStyle fullsize={fullsize}>
                <h3>Pinned notes</h3>
                {pinnedNotesState.pinnedNotes.map((note, index) => <NoteCard 
                    key={index} 
                    id={note.id ?? NaN}
                    ></NoteCard>)}
            </PinnedNotesStyle>
        </div>      
    )
}
export default PinnedNotes