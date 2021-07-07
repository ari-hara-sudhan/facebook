import React from 'react'
import "./SidebarRow.css"
import { Avatar } from '@material-ui/core'

function SidebarRow({src,Icon,title}) {
    return (
        <div className="sidebarrow">
            {src && <Avatar  src={src}/>}
            {Icon && <Icon fontSize="large"/>}
            <h4 className="sidebarrow__title">{title}</h4>
            
        </div>
    )
}

export default SidebarRow
