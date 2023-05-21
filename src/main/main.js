import React from "react";
import { Navbar } from "../navbar/navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Meeting } from "../pages/meeting";
export function Application(){
    return(
        <BrowserRouter>
           <Navbar />
             <div className="pages">
                <Routes>
                    <Route path="/meeting" element={<Meeting />} />
                </Routes>
             </div>
        </BrowserRouter>
    )
}