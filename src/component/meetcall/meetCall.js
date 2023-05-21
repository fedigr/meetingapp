import React from "react";
import { PersList } from "../friends-pers/per-list";
import { MeetControler } from "../meetcontroler/controler";
import { OpenCam } from "../opencam/opencam";
export const MeetCall =()=>{
    return(
        <div className="meeting-call">
         <div className="meet-header"></div>
         <div className="meet-body">
             <OpenCam />
             <PersList />
         </div>
         <MeetControler />
        </div>
    )
}