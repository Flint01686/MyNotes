import React, { FC, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { InputPanelStyle } from '../../../style/InputPanelStyle'
import { RegisterI } from '../../Interfaces/Auth'
import BaseLayout from '../../layouts/BaseLayout'
import { signUp } from '../../Requests'
import Submit from '../../UI/Submit'
import onlyTrueHandler from '../serviceFunctions'

const Registration: FC = () => 
{ 
    let [login, setLogin] = useState<string>("")
    let [email, setEmail] = useState<string>("")
    let [password, setPassword] = useState<string>("")
    let [passConfirmation, setPassConfirmation] = useState<string>();

    const [problem, setProblem] = useState<string>("")

    const history = useHistory();

    function register(event: React.FormEvent<HTMLFormElement>)
    {
        const registerData: RegisterI = {
            login: login,
            email: email,
            password: password,
        }
        
        if (passConfirmation === registerData.password)
            signUp(registerData).then((res) => {
                console.log(res);
                
                if (!res.data.success) throw res; 
                history.push("/auth")
            }).catch(e => { 
                setProblem("User with this e-mail or login already exist.")
                setTimeout(() => setProblem(""), 7000)
            })
        else{
            setProblem('Value of field "Password" and field "Confirm password" must match')
            setTimeout(() => setProblem(""), 7000)
        }

        event.preventDefault()
    }

    return(
        <BaseLayout>
            {problem === "" ? null : <Alert variant="danger">{problem}</Alert>}
            <InputPanelStyle marginTop={"5%"}>    
                <form action="#" onSubmit={(event) => register(event)}>
                    <h3>Registration</h3>
                    <div>
                        <h6>Login</h6>
                        <input type='text' required
                            onChange={event => onlyTrueHandler(event, setLogin)} />
                    </div>
                    <div>
                        <h6>E-mail</h6>
                        <input type='email' required 
                            onChange={event => onlyTrueHandler(event, setEmail)} />
                    </div>
                    <div>
                        <h6>Password</h6>
                        <input type='password' required 
                            onChange={event => onlyTrueHandler(event, setPassword)} />
                    </div>
                    <div>
                        <h6>Confirm password</h6>
                        <input type='password' required 
                            onChange={event => setPassConfirmation(event.target.value)} />
                    </div>
                    <Submit text="Go" backgroundColor="black" textColor="white"> Go </Submit>

                </form>
            </InputPanelStyle>
        </BaseLayout>
    )
}
export default Registration