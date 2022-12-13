import React, {useEffect, useState} from 'react'
import { useStateValue } from './StateProvider'
import {Avatar, IconButton } from '@mui/material'
import {AttachFile, MoreVert, SearchOutlined} from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import axios from 'axios'

const Chat = ({messages}) => {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const [{user}, dispatch] = useStateValue()

    const sendMessage = async(e) => {
        e.preventDefault()
        await axios.post('http://localhost:8801/messages/new', {
            message: input,
            name: user.displayName,
            timestamp: new Date().toUTCString(),
            received: true
        })
        setInput("")
    }

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

  return (
    <div className='chat'>
        <div className='chat__header'>
            <Avatar src={`https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png`} />
            <div className='chat__headerInfo'>
                <h3>Dev Help</h3>
                <p>Last seen at {""}
                    {messages[messages.length -1]?.timestamp}
                </p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className='chat__body'>
            {messages.map(message => (
                <p className={`chat__message ${message.name === user.displayName}`}>
                    <span className='chat__name'>{message.name}</span>
                    {message.message}
                    <span className='chat__timestamp'>
                        {message.timestamp}
                    </span>
                </p>
            ))}
        </div>
        <div className='chat__footer'>
            <EmojiEmotionsIcon/>
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon/>
        </div>
    </div>
  )
}

export default Chat