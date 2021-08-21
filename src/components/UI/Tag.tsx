import React, { FC } from 'react'
import { TagStyle } from "../../style/TagStyle"


const Tag: FC<{readonly onClick: Function}> = ({children, onClick}) =>
{
    return (
        // <div style={{display: "inline-flex"}}>
            <TagStyle onClick={(e) => onClick(children)}>
                {children}
            </TagStyle>
        // </div>
        
    )
}
export default Tag;