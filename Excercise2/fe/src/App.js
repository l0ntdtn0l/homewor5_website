import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { useStateValue } from './components/StateProvider';
import Pusher from 'pusher-js'
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  const [messages, setMessages] = useState([])
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("/messages/sync").then(res => {
      setMessages(res.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('fb53aa797214644cdbdc', {
      cluster: 'ap2'
    })
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    })
  
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])
  console.log(messages)

  return (
    <div className='app'>
      { !user ? <Login/> : (
        <div className='app__body'>
          <Sidebar messages={messages}/>
          <Chat messages={messages}/>
        </div>
      )}
    </div>
  )
}

export default App;