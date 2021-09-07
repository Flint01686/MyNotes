import styled from 'styled-components'

interface InputPanelStyleI
{
    marginTop?: string;
}

export const InputPanelStyle = styled.div<InputPanelStyleI>`
&{
    margin-top: ${props => props.marginTop};
    form{
        width: fit-content; 
        display: grid;
        grid-template-columns: 1fr;
        justify-items: left;
        margin: 0 auto;
        padding: 40px;
        row-gap: 20px;
        background-color: rgba(	196, 196, 196, 0.5);

        a{
            justify-self: right;
            cursor: pointer;
            font-size: 14px;
            color: inherit;
            &:hover{
                color: blue !important;
            }
        }

        h3, h6{
            margin: 0;
        }
        h3{
            font-size: 32px;
        }
        h6{
            font-size: 16px;
        }
        div
        {
            display: grid;
            width: auto;
            input {
                background-color: #c4c4c4;
                max-width: 20vw;
                min-width: 200px;
                border: none;
                font-size: 24px;
            }
            input:focus-visible
            {
                outline: none;
            }
        }
    }   
}
`