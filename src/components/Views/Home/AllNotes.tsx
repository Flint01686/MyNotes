import React, {FC, useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
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

const AllNotes: FC = () => 
{
    const dispatch = useDispatch() 
    let refresher : unknown = useSelector<RootState>((notes) => notes.refresher)
    let notesState : unknown = useSelector<RootState>((notes) => notes.notes)
    const filterRef = useRef<HTMLInputElement>(null)
    
    const [filter, setFilter] = useState("")
    const [pageCount, setPageCount] = useState<number>(0)
    let { page } = useParams<{page: string}>();
    const [refreshState, setRefreshState] = useState(false)

    let history = useHistory()

    const currPage = () => page ? parseInt(page) : 0
    const pageValidate = (pageBuf: number, count: number) => {
        if (pageBuf >= count) history.push('/home'); }

    useEffect(() => {   
        if (currPage() < 0) {
            alert("не шути со мной");
            history.push('/home');
            return;
        }
        try
        {            
            if(filter === "") {
                setRefreshState(true)
                getPagesCount().then(res => {
                    const countBuf = Math.ceil(res.data / noteOnPageCount);           
                    pageValidate(currPage(), countBuf)
                    setPageCount(countBuf)
                })
                getPageNotes(currPage()).then(res => {
                    dispatch(setNote(res.data))        
                    setRefreshState(false)
                })
            } else {
                setRefreshState(true)
                getPagesCountByFilter(filter).then(res => {
                    const countBuf = Math.ceil(res.data / noteOnPageCount);           
                    pageValidate(currPage(), countBuf)
                    setPageCount(countBuf)
                }) 
                getPageNotesByFilter(currPage(), filter).then(res => {
                    dispatch(setNote(res.data))
                    setRefreshState(false)
                })
            }    
        }
        catch (e)
        {
            alert(e)     
        }
    }, [page, refresher, filter])

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
                <input type="text"
                    ref={filterRef} 
                    defaultValue={filter}
                    onKeyUp={(e) => {
                        if(e.key === 'Enter') {
                            setFilter(filterRef.current?.value ?? "")
                        }
                    }
                }/>
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
            <Pagenation page={currPage()} count={pageCount}> {currPage()+1}|{pageCount} </Pagenation>
        </AllNotesStyle>  
    )
}
export default AllNotes