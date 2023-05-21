import React from "react";
import { MeetCall } from "../component/meetcall/meetCall";
import { MeetChat } from "../component/meetchat/meetChat";

export const Meeting =()=>{
  return(
    <div class="meeting">
         <MeetCall />
         <MeetChat />
    </div>
  )
}