import styled from 'styled-components'

export const TagInputStyle = styled.div`
&
{
    display: flex; 
    flex-flow:row wrap; 
    column-gap: 7px; 
    row-gap: 10px; 
    align-items:center;
    .input__tags
    {
        height: 38px;
        display: flex;
        flex-direction: row;
        button{
            border-radius: 0 5px 5px 0;
            background-color: #c4c4c4;
            border: none;
            font-size: 24px;
            &:hover{
                background-color: coral;
            }
        }
        input{
            justify-self: center;
            border-radius: 5px 0 0 5px;
            background-color: #c4c4c4;
            border: none;
            font-size: 24px;
            &:focus-visible
            {
                outline: none;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    &
    {
        flex-direction: column;
        input{
            justify-self: center;
            max-width: 200px;
            border-radius: 5px 0 0 5px;
            background-color: #c4c4c4;
            border: none;
            font-size: 24px;
            &:focus-visible
            {
                outline: none;
            }
        }
    }
}
`