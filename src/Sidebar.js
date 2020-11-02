import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
