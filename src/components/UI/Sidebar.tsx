import React, { FC } from 'react'
import { SidebarStyle } from '../../style/SidebarStyle'


export interface SidebarI
{
    readonly background?: string;
    readonly className?: string;
}

const Sidebar: FC<SidebarI> = ({className="visible", background = "black", children}) =>
{
    return (
        <SidebarStyle className={className} background={background}> 
            <div className={className}>
                { children }
            </div>
        </SidebarStyle>
    )
}

export default Sidebar