import styled from 'styled-components'
import { PinnedNotesI } from '../components/Views/Home/PinnedNotes'

export const PinnedNotesStyle = styled.div<PinnedNotesI>`
&
{
    display: grid;
    
    grid-row-gap: 20px;
    padding: 20px 20px;
    position: sticky;
    height: ${props => props.fullsize ? 'auto' : '100vh'};
    overflow-y: auto;
    justify-content: center;
    top: 0;
    bottom: 0;
    background-color: black;
}
h3
{
    color: white;
    text-align: center;
}
@media screen and (max-width: 650px) { 
    padding: 10px;
 }
`