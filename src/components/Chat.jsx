import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add2.png"
import More from "../img/more.png"
import Messages from "./Messages"
import { ChatContext } from '../context/ChatContext'
import Input from "./Input"
import { useContext } from 'react'



const Chat = () => {

  const { data } = useContext(ChatContext)
  

  return (
    <div className='chat'>

      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt=""></img>
          <img src={Add} alt=""></img>
          <img src={More} alt=""></img>
        </div>
      </div>
      <Messages/>
      <Input/>

    </div>
  )
}

export default Chat
