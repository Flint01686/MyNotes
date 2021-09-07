import React, { FC, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { InputPanelStyle } from '../../../style/InputPanelStyle'
import { ResetPasswordI } from '../../Interfaces/Auth'
import BaseLayout from '../../layouts/BaseLayout'
import { resetPassword, sendEmail } from '../../Requests'
import Submit from '../../UI/Submit'
import onlyTrueHandler from '../serviceFunctions'

const ForgotPassword: FC = () => 
{ 
    let [email, setEmail] = useState<string>("")
    const [problem, setProblem] = useState<string>("")

    const history = useHistory();

    function sendEmailToRestore(event: React.FormEvent<HTMLFormElement>)
    {
        sendEmail({email: email}).then(res => {
            alert(res)
            history.push('/auth');
            event.preventDefault();
        }).catch(err => console.error(err))
    }

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
                    <Submit text="Send" backgroundColor="black" textColor="white"> Go </Submit>
                </form>
            </InputPanelStyle>
        </BaseLayout>
    )
}
export default ForgotPassword