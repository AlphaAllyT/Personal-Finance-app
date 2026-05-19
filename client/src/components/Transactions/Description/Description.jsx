import React from "react";

import "./DescriptionStyle.css"
import "../TransactionStyleMedia.css"
import avator from "../avatars/ethan-clark.jpg"

function Description() {
    return (
        <div>
            <div className="descriptionBox">
                <div className="id">
                    <img src={avator} alt="" className="circle-img"/>
                    <p className="descriptionBoxTitle">Alliaster Wentzel</p>
                </div>
                <div className="descriptionBills">
                    <p style={{fontWeight:"bold"}}>$850</p>
                    <p style={{color:"gray", fontSize: "0.8rem"}}>30 Aug 2026</p>
                </div>
            </div>
        </div>
    )

}

export default Description;