import React from "react";
import { Chat } from "../Chat/chat";
import { UserList } from "../UserList/Userlist";
export const MeetChat =()=>{
    return(
        <div className="meeting-chat">
          <UserList />
          <Chat />
        </div>
    )
}