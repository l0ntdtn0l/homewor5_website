import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import { useStateValue } from './StateProvider'
import {SearchOutlined} from '@mui/icons-material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarChat from './SidebarChat';

const Sidebar = ({messages}) => {
    const [{user}, dispatch] = useStateValue()
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar src={user?.photoURL}/>
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchOutlined/>
                <input placeholder='Search or start new chat' type="text" />
            </div>
        </div>
        <div className='sidebar__chats'>
            <SidebarChat messages={messages}/>
        </div>
    </div>
  )
}

export default Sidebar