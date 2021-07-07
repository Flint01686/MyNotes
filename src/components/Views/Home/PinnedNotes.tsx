import React, { FC } from 'react'
import { PinnedNotesStyle } from '../../../style/PinnedNotesStyle'
import NoteCard from '../../UI/NoteCard'

const PinnedNotes: FC  = () => 
{
    
    let i:number =1;
    let arr:Array<any>  = []
    arr.push(<NoteCard 
        key={-1}
        text="The path of the righteous man is beset on all sides by the 
        inequities of the selfish and the tyranny of evil men. Blessed is he
         who, in the name of charity and good will, shepherds the weak through 
         the valley of darkness, for he is truly his brother's keeper and the finder of lost
        children. And I will strike down upon thee with great vengeance and furious 
        anger those who attempt to poison and destroy my brothers. And you will know my 
        name is the Lord when I lay my vengeance upon thee."
        tags = {["lmao"]}></NoteCard>)
    while(i++<5)
        arr.push(<NoteCard 
            key={i}
            text="The path"
            tags = {["lmao"]}></NoteCard>)

    return (
        <div style={{height: '100vh'}}>
            <PinnedNotesStyle>
                {arr}
            </PinnedNotesStyle>
        </div>      
    )
}
export default PinnedNotes