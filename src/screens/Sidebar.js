/* eslint-disable jsx-a11y/alt-text */
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
import {useSelector} from 'react-redux';
import {selectUser} from '../redux/features/userSlice';
import db, { auth } from  '../firebase'
import { useState } from 'react'
import { useEffect } from 'react'

function Sidebar() {
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        })
    }, [])

    const handleAddChannel = (e) => {
        e.preventDefault()

        const channelName = prompt('Enter a new channel name')

        if (channelName) {
            db.collection('channels').add({
                channelName: channelName
            })

        }
    }
    return (
        <div className='sidebar' >
        <div className="sidebar__top">
            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/1200px-Discord_logo.svg.png" height="50px"></img>
            <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>

                <AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
            </div>
            <div className="sidebar__channelsList">
            {
                        channels.map(({ id, channel }) => (
                            <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                        ))
                    }
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
             <Avatar src={user.photo} onClick={() => auth.signOut()} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
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
