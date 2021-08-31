import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/reducers/rootReducer'
import { HomeStyle } from '../../../style/HomeStyle'
import { useIsMobile } from '../../Hooks/useIsMobile'
import { Note } from '../../Interfaces/Note'
import BaseLayout from '../../layouts/BaseLayout'
import Unauthorized from '../../UI/Unauthorized'
import AllNotes from './AllNotes'
import PinnedNotes from './PinnedNotes'

export interface NotesStateI{
    notes: Array<Note>
}

export const notesOnPageCount = 9

const Home: FC = () => {
    let isMobile = useIsMobile();
    const isToggleOn = useSelector((state: RootState) => state.toggle.isToggleOn)
    
    if (localStorage.getItem("accessToken"))
    return (
        <BaseLayout>
            <HomeStyle>
                {isMobile ? null : 
                    <PinnedNotes></PinnedNotes>}
                {!(isMobile && isToggleOn) ? 
                    <AllNotes></AllNotes> : null}
            </HomeStyle>
        </BaseLayout>
    ) 
    else return <Unauthorized></Unauthorized>
}
export default Home

