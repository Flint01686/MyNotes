import React, { FC, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { InputPanelStyle } from '../../../style/InputPanelStyle'
import BaseLayout from '../../layouts/BaseLayout'
import { sendEmail } from '../../Requests'
import { Loader } from '../../UI/Loader'
import Submit from '../../UI/Submit'
import onlyTrueHandler from '../serviceFunctions'

const ForgotPassword: FC = () => 
{ 
    let [email, setEmail] = useState<string>("")
    const [problem, setProblem] = useState<string>("")
    const [load, setLoad] = useState<boolean>(false)

    const history = useHistory();

    function sendEmailToRestore(event: React.FormEvent<HTMLFormElement>)
    {
        setLoad(true)
        sendEmail({email: email}).then(res => {
            setLoad(false)
            if (!res.data) setProblem("There no user with this email");
            else history.push('/auth');
            event.preventDefault();
        }).catch(err => console.error(err))
    }

    if (load) return <Loader></Loader>
    return(
        <BaseLayout>
            {problem === "" ? null : <Alert variant="danger">{problem}</Alert>}
            <InputPanelStyle marginTop={"5%"}>    
                <form action="#" onSubmit={e => sendEmailToRestore(e)}>
                    <h4>Password recovery</h4>
                    <div>
                        <h6>Write your email, please</h6>
                        <input type='email' required 
                            onKeyUp={(e) => {
                                if(e.currentTarget.value === 'Enter') {
                                    setEmail(e.currentTarget.value)
                                }
                            }}
                            onChange={event => onlyTrueHandler(event, setEmail)} />
                    </div>
                    <Submit text="Send" backgroundColor="black" textColor="white"></Submit>
                </form>
            </InputPanelStyle>
        </BaseLayout>
    )
}
export default ForgotPassword