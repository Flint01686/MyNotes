import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar } from 'react-bootstrap';
import { switchToggle } from '../../store/reducers/toggleReducer';
import { useIsMobile } from '../Hooks/useIsMobile';
import Sidebar from '../UI/Sidebar';
import PinnedNotes from '../Views/Home/PinnedNotes';
import { RootState } from '../../store/reducers/rootReducer';
import { HeaderStyle } from '../../style/HeaderStyle';
import { useHistory } from 'react-router';

const Header: FC = () => 
{
    const dispatch = useDispatch()
    const isToggleOn = useSelector((state: RootState) => state.toggle.isToggleOn)
    const isMobile = useIsMobile()
    const history = useHistory()

    let changeToogleState = () => {
        dispatch(switchToggle(!isToggleOn))
    } 

    function Logout(){
        localStorage.removeItem('accessToken');
    }

    return (
        <>
        <Navbar  variant="dark" expand="lg" style={{backgroundColor: "#000"}}>
            <HeaderStyle>
                <div className="start brand">
                    {isMobile ? <a href="/"><img src="/main.jpg" alt="My notes"/></a> : <Navbar.Brand href="/">MyNotes</Navbar.Brand>}
                    {localStorage.getItem("accessToken") ? (<Nav>
                        <Nav.Link href="/note/create">Create note</Nav.Link>
                    </Nav>) : null}
                </div>
                
                <div className="end">
                    {!localStorage.getItem('accessToken') ? <>
                        <Nav.Link href="/auth">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        </> : <Nav.Link onClick={()=> Logout()} href="/">Logout</Nav.Link>}
                    {history.location.pathname === "/" || history.location.pathname === "/home" ? (
                        isMobile ? <Navbar.Toggle onClick={changeToogleState} 
                        style={isToggleOn ? {backgroundColor: '#444444'} : {}}/> : null) : null}
                </div>
            </HeaderStyle>
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