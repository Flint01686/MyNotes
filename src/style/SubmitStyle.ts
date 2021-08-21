import styled from 'styled-components'
import { SubmitI } from '../components/UI/Submit'

export const SubmitStyle = styled.input.attrs<SubmitI>(props => (
    {
        onClick: props.onClick,
        type: 'submit',
        value: props.text
    }
))<SubmitI>`
&{
    border: none;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    font-size: ${props => props.fontSize};
    padding: 8px 16px;
    border-radius: 17px;
    justify-content: center;
    min-width: 100px;
    cursor: pointer;
    justify-self: center;
    
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;  
    /* filter: contrast(50%); */

}
&:hover
{
    transition: 700ms;
    background-color: ${props => props.hoverBgColor};
    color: ${props => props.hoverColor};
}
`