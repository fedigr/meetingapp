import React from "react";
export const ControleSharing =()=>{
    return(
        <div className="controle-sharing">
            <button class="cam-btn btn-dark rounded ">
                <i class="uil uil-record-audio"></i>
            </button>
            <button class="cam-btn btn-dark rounded ">
               <i class="uil uil-microphone"></i>
            </button>
            <button class="cam-btn btn-dark rounded bg-danger">
                <i class="uil uil-phone"></i>
            </button>

            <button class="cam-btn btn-dark rounded ">
                <i class="uil uil-desktop"></i>
            </button>
            <button class="cam-btn btn-dark rounded ">
               <i class="uil uil-video"></i>
            </button>
        </div>
    )
}