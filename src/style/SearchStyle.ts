import styled from "styled-components";

export const SearchStyle = styled.div`
&{
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 35px;
    justify-self: center;
    width: 70%;
    height: 38px;
    input[type=text]
    {
        outline: none;
        width:100%;
        border-radius: 5px 0 0 5px;
        background-color: #e9e9e9;
        border: none;
        font-size: 24px;
    }
    input[type=button]
    {
        border-radius: 0 5px 5px 0;
        background-color: black;
        color: white;
        border: none;
        font-size: 20px;
    }
}
`