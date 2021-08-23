import React, {FC, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { allNotesStateI, setNote } from '../../../store/reducers/allNotesReducer'
import { RootState } from '../../../store/reducers/rootReducer'
import { AllNotesListStyle } from '../../../style/AllNotesListStyle'
import { AllNotesStyle } from '../../../style/AllNotesStyle'
import { SearchStyle } from '../../../style/SearchStyle'
import { Note } from '../../Interfaces/Note'
import { getPageNotes, getPageNotesByFilter, getPagesCount, getPagesCountByFilter } from '../../Requests'
import { Loader } from '../../UI/Loader'
import NoteCard from '../../UI/NoteCard'
import Pagenation from '../../UI/Pagenation'
import { NotesStateI } from './Home'

const noteOnPageCount = 9;

function arr( a : unknown, b : unknown)
{
    return false
}

const AllNotes: FC = () => 
{
    const dispatch = useDispatch() 
    let refresher : unknown = useSelector<RootState>((notes) => notes.refresher)
    let notesState : unknown = useSelector<RootState>((notes) => notes.notes, arr)
    
    const [filter, setFilter] = useState("")
    const [pageCount, setPageCount] = useState<number>(0)
    const [page, setPage] = useState<number>(0)
    const [currentNotes, setCurrentNotes] = useState<Array<Note>>([])
    const [refreshState, setRefreshState] = useState(false)

    const history = useHistory()

    useEffect(() => {          
        try
        {
            console.log("roll");
            
            if(filter === "") {
                setRefreshState(true)
                getPagesCount().then(res =>{
                    setPageCount(Math.ceil(res.data / noteOnPageCount))
                })
                getPageNotes(page).then(res => {
                    setRefreshState(false)
                    setCurrentNotes(res.data)
                    // dispatch(setNote(res.data))
                    // console.log("outsude", res.data, "|", notesState);
                    
                })
            } else {
                getPagesCountByFilter(filter).then(res =>{
                    setPageCount(Math.round(res.data / noteOnPageCount))
                }) 
                getPageNotesByFilter(page, filter).then(res => {
                    setRefreshState(false)
                    setCurrentNotes(res.data)
                    // dispatch(setNote(res.data))
                    // console.log(notesState);
                })
            }    
        }
        catch (e)
        {
            history.push("/note/error/" + JSON.stringify(console.log(e)))     
        }
    }, [page, refresher, filter])

    // useEffect(() => {
    //     setCurrentNotes([])
    //     console.log("inside", (notesState as allNotesStateI).notes)
    //     setRefreshState(false)
        
    // }, [notesState])

    if (refreshState) return (<Loader></Loader>)
    else if (currentNotes.length === 0 && filter=== "") return (<div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20vh",
        }}> 
        <h1>U have no notes, srry, glhf</h1>
        <a href="/note/create">Create new note</a></div> 
    )
    else return (      
        <AllNotesStyle>
            <h2>All notes</h2>
            <SearchStyle className="search">
                <input type="text" onChange={(e) => {console.log(e.currentTarget.value); setFilter(e.currentTarget.value)}}/>
                <input 
                onClick={(e) => console.log(e.currentTarget)}
                type="button" 
                value="Search" />
            </SearchStyle>
            <AllNotesListStyle>
                {console.log("inner", currentNotes)}
                {currentNotes.map((note,index) => <NoteCard
                    key={index} 
                    note={note}
                    id={note.id ?? NaN}
                ></NoteCard>)}
            </AllNotesListStyle>
            <Pagenation page={page} count={pageCount} changePage={setPage}> {page+1}|{pageCount} </Pagenation>
        </AllNotesStyle>  
    )
}
export default AllNotes