import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SidebarChat = ({messages}) => {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

  return (
    <div className='siderChat'>
        <Avatar src={`https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png`}/>
        <div className='sidebarChat__info'>
            <h2>Dev Help</h2>
            <p>{messages[messages.length -1]?.message}</p>
        </div>
    </div>
  )
}

export default SidebarChat