import styled from "styled-components"
import { SidebarI } from "../components/UI/Sidebar"

export const SidebarStyle = styled.div<SidebarI>`
&
{
    background: ${props => props.background};
    width: 100%;
    justify-content: center;
    display: flex;
}
.visible 
.novisible{
    position: relative;
    margin: 0 auto;
}
.visible{
    animation: left 1s ease-in-out;
}
.novisible{
    animation: right 1s;
    display: none;
}
@keyframes left {
    from { left: 70%; }
    to { left: 0; }
}
@keyframes rigth {
    from { left: 0; }
    to { left: 70%; }
}
`