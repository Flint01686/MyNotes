import React, { FC } from 'react'
import { useParams } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout'

interface ErrorI{
    message: string
}

const ErrorMessage: FC = () => {
    let { message } = useParams<ErrorI>();
    return (<BaseLayout><p>{message}</p></BaseLayout>)
}

export default ErrorMessage
