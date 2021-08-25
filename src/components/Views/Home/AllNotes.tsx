import React, {FC, useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { allNotesStateI, setNote } from '../../../store/reducers/allNotesReducer'
import { RootState } from '../../../store/reducers/rootReducer'
import { AllNotesListStyle } from '../../../style/AllNotesListStyle'
import { AllNotesStyle } from '../../../style/AllNotesStyle'
import { SearchStyle } from '../../../style/SearchStyle'
import { getPageNotes, getPageNotesByFilter, getPagesCount, getPagesCountByFilter } from '../../Requests'
import { Loader } from '../../UI/Loader'
import NoteCard from '../../UI/NoteCard'
import Pagenation from '../../UI/Pagenation'

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
    const filterRef = useRef<HTMLInputElement>(null)
    
    const [filter, setFilter] = useState("")
    const [pageCount, setPageCount] = useState<number>(0)
    const [page, setPage] = useState<number>(0)
    const [refreshState, setRefreshState] = useState(false)

    const history = useHistory()

    useEffect(() => {          
        try
        {            
            if(filter === "") {
                setRefreshState(true)
                getPagesCount().then(res =>{                    
                    setPageCount(Math.ceil(res.data / noteOnPageCount))
                })
                getPageNotes(page).then(res => {
                    dispatch(setNote(res.data))        
                })
            } else {
                getPagesCountByFilter(filter).then(res =>{
                    setPageCount(Math.round(res.data / noteOnPageCount))
                }) 
                getPageNotesByFilter(page, filter).then(res => {
                    dispatch(setNote(res.data))
                })
            }    
        }
        catch (e)
        {
            history.push("/note/error/" + JSON.stringify(console.log(e)))     
        }
    }, [page, refresher, filter])

    useEffect(() => {
        setRefreshState(false)
        
    }, [notesState])

    if (refreshState) return (<Loader></Loader>)
    else if ((notesState as allNotesStateI).notes.length === 0 && filter=== "") return (<div style={{
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
                <input type="text" ref={filterRef} onKeyUp={(e) => {
                    if(e.key === 'Enter') {
                        setFilter(filterRef.current?.value ?? "")
                    }
                }}/>
                <input 
                onClick={(e) => setFilter(filterRef.current?.value ?? "")}
                type="button" 
                value="Search" />
            </SearchStyle>
            <AllNotesListStyle>
                {(notesState as allNotesStateI).notes.map((note,index) => <NoteCard
                    key={index} 
                    // note={note}
                    id={note.id ?? NaN}
                ></NoteCard>)}
            </AllNotesListStyle>
            <Pagenation page={page} count={pageCount} changePage={setPage}> {page+1}|{pageCount} </Pagenation>
        </AllNotesStyle>  
    )
}
export default AllNotes