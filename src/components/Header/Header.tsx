import React, { FC, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from 'react-bootstrap';
import { switchToggle } from '../../store/reducers/toggleReducer';
import { useIsMobile } from '../Hooks/useIsMobile';
import Sidebar from '../UI/Sidebar';
import PinnedNotes from '../Views/Home/PinnedNotes';
import { RootState } from '../../store/reducers/rootReducer';

const Header: FC = () => 
{
    const dispatch = useDispatch()
    const isToggleOn = useSelector((state: RootState) => state.toggle.isToggleOn)

    let changeToogleState = () => {
        dispatch(switchToggle(!isToggleOn))
    } 

    return (
        <>
        <Navbar variant="dark" expand="lg" style={{backgroundColor: "#000"}}>
            <Navbar.Brand style={{marginLeft: "50px"}} href="/">MyNotes</Navbar.Brand>
            <Navbar.Toggle onClick={changeToogleState} style={isToggleOn ? {backgroundColor: '#444444'} : {}}/>
        </Navbar>
        <Sidebar className={isToggleOn ? "visible" : "novisible"}>
            {useIsMobile() && isToggleOn ? ( 
                <PinnedNotes fullsize={true}></PinnedNotes>
            ) : null} 
        </Sidebar>

        </>
    )
}

export default Header