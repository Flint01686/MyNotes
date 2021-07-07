import React, { FC, Suspense } from 'react'
import Header from '../Header/Header'

const BaseLayout: FC = ({ children }) => {
    return (
        <>
            <Header></Header>
            <Suspense fallback={<div>Loading...</div>}>        
                {children}
            </Suspense>         
        </>
    )
}
export default BaseLayout