import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/reducers/rootReducer'
import { HomeStyle } from '../../../style/HomeStyle'
import { useIsMobile } from '../../Hooks/useIsMobile'
import BaseLayout from '../../layouts/BaseLayout'
import AllNotes from './AllNotes'
import PinnedNotes from './PinnedNotes'

const Home: FC = () => {
    let isMobile = useIsMobile();
    const isToggleOn = useSelector((state: RootState) => state.toggle.isToggleOn)
    return (
        <BaseLayout>
            <HomeStyle>
                {isMobile ? null : <PinnedNotes></PinnedNotes>}
                {!(isMobile && isToggleOn) ? <AllNotes></AllNotes> : null}
            </HomeStyle>        
        </BaseLayout>
    )
}
export default Home