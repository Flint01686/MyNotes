import React, { FC } from 'react'
import BaseLayout from '../../layouts/BaseLayout'
import InputPanel from '../../UI/InputPanel'

const Authorization: FC = () => 
{ 
    let authorizationData = {
        main: "Authorization",
        inputs: [
            {
                main: "Login",
                type: "text"
            },
            {
                main: "Password",
                type: "password"
            },
        ]
    }

    return(
        <BaseLayout>
            <InputPanel marginTop={"5%"} data={authorizationData}></InputPanel>
        </BaseLayout>
    )
}
export default Authorization