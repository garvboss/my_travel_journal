import React from "react"
import globe from "../images/globe.png"
export default function Header()
{
   return(
    <div className = "head">
        <img className="head_img" src = {globe} alt="globe_img" />
        <h2 className="head_title">MyTravelJournal</h2>
    </div>
   )
}