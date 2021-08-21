import styled from "styled-components";

export const NodeCardStyle = styled.div`
img{
    height: 228px;
    object-fit: contain;
}
width: 18rem;
.card
{
    background-color: #E5E5E5;
    width: auto;
    cursor: pointer;
}
.card:hover{
    transition: all 500ms;
    background-color: #C4C4C4;
}
.buttons_panel{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
button{
    border: none;
    color: white;
    background-color: black;
    border-radius: 5px;
    padding: 3px 12px;
    &:hover{
        background-color: red;
        transition: 700ms;
    }
}
.clone:hover{
    background-color: green;
}
`