import styled from 'styled-components'

export const PinnedNotesStyle = styled.div`
&
{
    display: grid;
    grid-row-gap: 20px;
    padding: 20px 20px;
    position: sticky;
    height: 100vh;
    overflow-y: scroll;
    align-self: flex-start;
    /* width: auto; */
    bottom: 0;
    background-color: black;
    
}
`