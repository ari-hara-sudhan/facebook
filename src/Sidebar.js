import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
            src="https://www.bing.com/th?id=OIP.5TFdq1ah-13yRK4aqMqt8wHaFj&w=196&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" title="ahs dev"
            />
             <SidebarRow 
             Icon={LocalHospitalIcon}
             title="Covid-19 Vacination"
            />
            <SidebarRow 
             Icon={EmojiEmotionsIcon}
             title="Face"
            />
            <SidebarRow 
             Icon={PeopleIcon}
             title="Friends"
            />
            <SidebarRow 
             Icon={ChatIcon}
             title="Message"
            />
            <SidebarRow 
             Icon={StoreIcon}
             title="Marketplace"
            />
            <SidebarRow 
             Icon={VideoLibraryIcon}
             title="Videos"
            />
            <SidebarRow 
             Icon={ExpandMoreIcon}
             title="Showmore"
            />
         
           
            
            
        </div>
    )
}

export default Sidebar
