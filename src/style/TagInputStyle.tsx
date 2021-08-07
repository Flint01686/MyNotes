import styled from 'styled-components'

export const TagInputStyle = styled.div`
&
{
    display: flex; 
    flex-direction:row; 
    column-gap: 7px; 
    align-items:center;
    .input__tags
    {
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