import React, { FC } from 'react'
import { TagStyle } from "../../style/TagStyle"


const Tag: FC<{readonly onClick: Function}> = ({children, onClick}) =>
{
    return (
        <TagStyle onClick={(e) => onClick(children)}>
            {children}
        </TagStyle>        
    )
}
export default Tag;