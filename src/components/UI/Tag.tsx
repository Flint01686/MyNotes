import React, { FC } from 'react'
import { TagStyle } from "../../style/TagStyle"


const Tag: FC = ({children}) =>
{
    return (
        // <div style={{display: "inline-flex"}}>
            <TagStyle>
                {children}
            </TagStyle>
        // </div>
        
    )
}
export default Tag;