import React, {FC, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setNote } from '../../../store/reducers/allNotesReducer'
import { AllNotesListStyle } from '../../../style/AllNotesListStyle'
import { AllNotesStyle } from '../../../style/AllNotesStyle'
import { SearchStyle } from '../../../style/SearchStyle'
import { Note } from '../../Interfaces/Note'
import { getPageNotes, getPageNotesByFilter, getPagesCount } from '../../Requests'
import NoteCard from '../../UI/NoteCard'
import Pagenation from '../../UI/Pagenation'
import { NotesStateI } from './Home'

const AllNotes: FC = () => 
{
    const dispatch = useDispatch() 
    let notesState : unknown = useSelector<Array<Note>>((notes) => notes)
    
    const [filter, setFilter] = useState("")
    const [pageCount, setPageCount] = useState<number>(0)
    const [page, setPage] = useState<number>(0)
    

    const history = useHistory()

    useEffect(() => {          
        try
        {
            getPagesCount(filter).then(res =>{
                console.log(res);
            })
            filter === "" ? getPageNotes(page).then(res => {
                console.log(res.data);
                dispatch(setNote(res.data))
            })
            : getPageNotesByFilter(page, filter).then(res => {
                console.log("kek", res, ":", filter);
                dispatch(setNote(res.data))
            })
        }
        catch (e)
        {
            history.push("/note/error/" + JSON.stringify(console.log(e)))     
        }
    }, [page, filter])

    if ((notesState as NotesStateI).notes.length === 0) return (<div style={{
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
                {console.log("kek", (notesState as NotesStateI).notes)}
                {(notesState as NotesStateI).notes.map((note,index) => <NoteCard 
                    id={note.id}
                    key={index}
                    text={note.text}
                    attachments={note.attachments}
                    tags={note.tags}
                    isPinned={note.isPinned}
                ></NoteCard>)}
            </AllNotesListStyle>
            <Pagenation changePage={setPage}> {page}|{pageCount} </Pagenation>
        </AllNotesStyle>  
    )
}
export default AllNotes