import styled from "styled-components";

export const AllNotesStyle = styled.div`
display: grid;
width: inherit;
grid-template-rows: auto auto auto;
padding: 20px;
h2{
    text-align: center;
    margin-bottom: 20px;
}
@media screen and (max-width: 650px) { 
    padding: 10px;
 }
`