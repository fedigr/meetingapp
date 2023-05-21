import React from "react";
export const UserPer =({photo ,name ,callstate})=>{
    return(
        <div className="card rounded">
            <div className="card-header">
              <button className="btn btn-primary rounded">
              <i class="uil uil-microphone"></i>
              </button>
            </div>
            <div className="card-footer">
             <div className="per-user">
                    <span><i class="uil uil-user-circle"></i></span>
                    <p>{name}</p>
             </div>
            </div>
            <img className="card-img-back" src={photo}/>
        </div>
    )
}