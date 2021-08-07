import React , { FC } from 'react'
import { InputPanelStyle } from '../../style/InputPanelStyle'
import Submit from './Submit'

interface Input
{
    main: string, 
    type: "text" | "password" | "email",
    placeholder?: string;
}

export interface InputPanelI
{
    data: {
        main: string;
        //TODO: fix it
        inputs: Array<any>;
        // inputs: Array<Input>;
    }
    marginTop?: string;
}

const InputPanel : FC <InputPanelI> = ({marginTop, data}) =>
{
    return (
        <InputPanelStyle marginTop={marginTop}>
            
            <form action="">
                <h3>{data.main}</h3>
                {data.inputs.map((currInput, key) =>(
                    <div key={key}>
                        <h6>{currInput.main}</h6>
                        <input type={currInput.type} required />
                    </div>
                ))}
                <Submit text="Go" backgroundColor="black" textColor="white"> Go </Submit>

            </form>
            
        </InputPanelStyle>
    )
}

export default InputPanel