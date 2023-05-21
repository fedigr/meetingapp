import React, { useEffect, useRef,useState } from "react";
import { CamControler } from "../camcontroler/camcontroler";
export const OpenCam=()=>{
    let [cam ,setcam] =useState(null);
    let video = useRef();
   function open(){
    navigator.mediaDevices.getUserMedia({video:true})
    .then(stream =>{
        video.current.srcObject =stream;
    }).catch((err)=>new Error("cannot access video cam"));
   }
   useEffect(()=>{
    open();
   })
    return(
        <div className="open-connect meet-video">
            <video autoPlay ref={video} className="video-cam-open"></video>
            <CamControler />
        </div>
    )
}