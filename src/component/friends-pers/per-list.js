import React from "react";
import photo from "../../assets/ok.jfif";
import { UserPer } from "./user-per";
export const PersList=()=>{
  return(
    <section className="pers-list">
      <UserPer photo={photo} name="melovera sourabi" />
    </section>
  )
}