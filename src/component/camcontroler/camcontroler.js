import React from "react";
import { ControleSharing } from "../control-sharing/controle-sharing";
export const CamControler=()=>{
    return(
        <div className="cam-controler">
              <div className="cam-controler-header">
                 <div className="owner-name">
                    <span><i class="uil uil-user-circle"></i></span>
                    <p>fedi grichi</p>
                 </div>
               <div className="c-t-h-left">
                <button class="cam-btn cam-btn-h btn-dark rounded">
                <i class="uil uil-record-audio"></i>
                </button>
                <button class="cam-btn cam-btn-h btn-dark rounded">
                  <i class="uil uil-camera"></i>
                </button>
                <button class="cam-btn cam-btn-h btn-dark rounded">
                <i class="uil uil-external-link-alt"></i>
                </button>
               </div>
              </div>
              <ControleSharing />
        </div>
    )
}