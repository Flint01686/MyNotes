import React, { FC } from 'react'
import BaseLayout from '../../layouts/BaseLayout'
import InputPanel from '../../UI/InputPanel'

const Registration: FC = () => 
{ 
    let registrationData = {
        main: "Registration",
        inputs: [
            {
                main: "Login",
                type: "text"
            },
            {
                main: "E-mail",
                type: "email"
            },
            {
                main: "Password",
                type: "password"
            },
            {
                main: "Confirm password",
                type: "password"
            },
        ]
    }

    return(
        <BaseLayout>
            <InputPanel marginTop={"5%"} data={registrationData}></InputPanel>
        </BaseLayout>
    )
}
export default Registration