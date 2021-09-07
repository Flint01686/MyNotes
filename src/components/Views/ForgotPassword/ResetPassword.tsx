import React, { FC, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { InputPanelStyle } from '../../../style/InputPanelStyle'
import { ResetPasswordI } from '../../Interfaces/Auth'
import BaseLayout from '../../layouts/BaseLayout'
import { getAccessByToken, resetPassword } from '../../Requests'
import { Loader } from '../../UI/Loader'
import Submit from '../../UI/Submit'
import onlyTrueHandler from '../serviceFunctions'

const ResetPassword: FC = () => 
{ 
    let [confirm, setConfirm] = useState<string>("")
    let [password, setPassword] = useState<string>("")
    const [problem, setProblem] = useState<string>("")
    const [refreshState, setRefreshState] = useState(true)
    const [access, setAccess] = useState(false)
    const [email, setEmail] = useState(null)

    const history = useHistory();

    let { token } = useParams<{token: string}>();

    if (!access)
        getAccessByToken({ token }).then(res => {
            if (!res.data) throw(new Error())
            setRefreshState(false)
            setAccess(true)
        }).catch(err =>{
            setRefreshState(false)
            setAccess(false)
        })

    function resetPass(event: React.FormEvent<HTMLFormElement>)
    {
        if (password !== confirm) {
            setProblem("Password and password confirmation fields value must match")
        } 
        else
            if (email && access){
                const resetData: ResetPasswordI = {
                    email: email ?? '',
                    password: password,
                }
                resetPassword(resetData).then(() => {
                    history.push('/auth');
                })
        
            }
        
        event.preventDefault()
    }
    
    if (refreshState) return (<Loader></Loader>)
    else if (!access) return (<p>U have no access</p>)
    else return(
        <BaseLayout>
            {problem === "" ? null : <Alert variant="danger">{problem}</Alert>}
            <InputPanelStyle marginTop={"5%"}>    
                <form action="#" onSubmit={(event) => resetPass(event)}>
                    <h3>Reset password</h3>
                    <div>
                        <h6>New password</h6>
                        <input type='password' required 
                            onChange={event => onlyTrueHandler(event, setPassword)} />
                    </div>
                    <div>
                        <h6>Confirm password</h6>
                        <input type='password' required 
                            onChange={event => onlyTrueHandler(event, setConfirm)} />
                    </div>
                    <Submit text="Go" backgroundColor="black" textColor="white"> Go </Submit>

                </form>
            </InputPanelStyle>
        </BaseLayout>
    )
}
export default ResetPassword