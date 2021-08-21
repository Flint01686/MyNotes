import React, { FC, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router'
import BaseLayout from '../layouts/BaseLayout'


const Unauthorized: FC = () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => history.push("/auth"), 1000);
    }, [])
    
    return (<BaseLayout>
        <Alert variant="dark">
            U need to login bro
        </Alert></BaseLayout>)
}

export default Unauthorized
