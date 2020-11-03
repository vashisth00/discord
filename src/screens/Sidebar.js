import React from 'react';
import '../styles/Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
    return (
        <div className='sidebar' >
        <div className="sidebar__top">
            <h3>Clever Programmer</h3>
            <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>

                <AddIcon  className='sidebar__addChannel' />
            </div>
            <div className="sidebar__channelsList">
            <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
            </div>
        </div>

        <div className="sidebar__voice">
            <SignalCellularAltIcon className='sidebar__voiceIcons' fontSize='large' />
            <div className="sidebar__voiceInfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>

            <div className="sidebar__voiceIcons">
                <InfoOutlinedIcon />
                <CallIcon />
            </div>
        </div>
        <div className="sidebar__profile">
             {/* Pull in user Photo from redux */}
            <Avatar src="#" />
            <div className="sidebar__profileInfo">
                <h3>Vashisth</h3>
                <p>cc</p>
            </div>

            <div className="sidebar__profileIcons">
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </div>
        </div>
    </div>
    )
}

export default Sidebar;
