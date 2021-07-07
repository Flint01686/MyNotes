import React, { FC } from 'react'
import { HomeStyle } from '../../../style/HomeStyle'
import BaseLayout from '../../layouts/BaseLayout'
import AllNotes from './AllNotes'
import PinnedNotes from './PinnedNotes'

const Home: FC = () => {
    return (
        <BaseLayout>
            <HomeStyle>
                <PinnedNotes></PinnedNotes>
                <AllNotes></AllNotes>
            </HomeStyle>        
        </BaseLayout>
    )
}
export default Home