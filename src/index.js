import virtualDom from "react-dom";
import React from "react";
import "./css/index.css";
import {Application} from "./main/main";
let meeting = virtualDom.createRoot(document.getElementById("root"));
meeting.render(<Application />)