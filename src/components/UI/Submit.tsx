import React , { FC } from 'react'
import { SubmitStyle } from '../../style/SubmitStyle'

export interface SubmitI
{
    backgroundColor?: string;
    textColor?: string;
    text: string;
    fontSize?: string; 
    hoverColor?: string;
    hoverBgColor?: string;
}

const Submit : FC <SubmitI> = ({hoverColor, hoverBgColor, backgroundColor, text, textColor, fontSize}) =>
{
    return <SubmitStyle text={text}
     fontSize={fontSize ?? "20px"}
     backgroundColor={backgroundColor ?? '#2c2c2c'}
     textColor={textColor ?? 'white'}
     hoverColor={hoverColor ?? 'white'}
     hoverBgColor={hoverBgColor ?? 'black'}>
    </SubmitStyle>
}

export default Submit