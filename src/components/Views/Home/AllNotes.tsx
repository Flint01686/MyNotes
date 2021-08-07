import React, {FC, useState, useEffect} from 'react'
import { AllNotesListStyle } from '../../../style/AllNotesListStyle'
import { AllNotesStyle } from '../../../style/AllNotesStyle'
import { Note } from '../../Interfaces/Note'
import NoteCard from '../../UI/NoteCard'
import Pagenation from '../../UI/Pagenation'

const AllNotes: FC = () => 
{
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(0)
    const [notes, setNotes] = useState<Array<Note>>([])
    const [notesOnPageCount, setNotesOnPageCount] = useState<number>(10)

    useEffect(() => {          

        // TODO: rewrite for db request
        try
        {
            let notesArr: Array<Note> = []
            for (let i:number = 0; i< 15; i++)
            {
                notesArr.push({
                    tags: ["lol", "kek", "zaza", "gagag", "blopblopblop"], 
                    img:"", 
                    text: "Yamaayyeeeyaaa whisky kola koroleva tncpola", })
            }
            setPageCount(1000)
            setNotes(notesArr)
        }
        catch (e)
        {
            console.log(e)      
        }

    }, [])

    return (
        <AllNotesStyle>
            <h2>All notes</h2>
            <AllNotesListStyle>
                {notes.map((note,index) => <NoteCard 
                    key={index}
                    text={note.text}
                    img={note.img}
                    tags={note.tags}
                ></NoteCard>)}
            </AllNotesListStyle>
            <Pagenation> {currentPage}|{pageCount} </Pagenation>
        </AllNotesStyle>  
    )
}
export default AllNotes