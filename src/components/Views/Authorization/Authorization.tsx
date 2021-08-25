import React, { FC, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { InputPanelStyle } from '../../../style/InputPanelStyle'
import { LoginI } from '../../Interfaces/Auth'
import BaseLayout from '../../layouts/BaseLayout'
import { signIn } from '../../Requests'
import Submit from '../../UI/Submit'
import onlyTrueHandler from '../serviceFunctions'

const Authorization: FC = () => 
{ 
    let [login, setLogin] = useState<string>("")
    let [password, setPassword] = useState<string>("")
    const [problem, setProblem] = useState<string>("")

    const history = useHistory();

    function auth(event: React.FormEvent<HTMLFormElement>)
    {
        const authData: LoginI = {
            login: login,
            password: password,
        }
        signIn(authData).then((response) => {
            localStorage.setItem('accessToken', response.data.accessToken);
            history.push('/home');
          }).catch(e => { 
                if (e.response && e.response.data && e.response.data.statusCode === 401) {
                    setProblem("Wrong login or password")
                } else setProblem(JSON.stringify(e))
                setTimeout(() => setProblem(""), 7000)
            })

        event.preventDefault()
    }

    return(
        <BaseLayout>
            {problem === "" ? null : <Alert variant="danger">{problem}</Alert>}
            <InputPanelStyle marginTop={"5%"}>    
                <form action="#" onSubmit={(event) => auth(event)}>
                    <h3>Authorization</h3>
                    <div>
                        <h6>Login</h6>
                        <input type='text' required 
                            onChange={event => onlyTrueHandler(event, setLogin)} />
                    </div>
                    <div>
                        <h6>Password</h6>
                        <input type='password' required 
                            onChange={event => onlyTrueHandler(event, setPassword)} />
                    </div>
                    <Submit text="Go" backgroundColor="black" textColor="white"> Go </Submit>

                </form>
            </InputPanelStyle>
        </BaseLayout>
    )
}
export default Authorization