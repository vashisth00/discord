import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Discord</h3>
                <ExpandMoreIcon></ExpandMoreIcon>
            </div>
            <div className="sidebar_channels">
               <div className="sidebar__channelsHeader">
                   <div className="sidebar__header">
                       <ExpandMoreIcon></ExpandMoreIcon>
                       <h4>Text Channels</h4>
                   </div>

                    <AddIcon className="sidebar__addChannel"></AddIcon>
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel></SidebarChannel>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
