import React from "react";
import "./SavingsStyle.css";

import potImage from "./pot_icon/iconPot.svg";

function TotalSaved() {
    return (  
        <div className="tempBoxOne">
            <div>
                <img src={potImage} alt="" />
            </div>
            <div>
                <p className="tempTitleOne">Total Saved</p>
                <p className="tempNumberOne">$850</p>
            </div>
        </div>   
    )

}

export default TotalSaved;