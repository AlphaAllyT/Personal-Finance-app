import React from "react"
import TotalSaved from "./Total_Savings/TotalSavings";
import SmallerSaved from "./Smaller_Savings/SmallerSaved";
import "./potsStyle.css";
import "./potStyleMedia.css";

function Pots() {   

    return (
        <div className="potContainer">
            <div className="potBoxFlex">
                <h2>Pots</h2>
                <p>See details ›</p>
            </div>
            <div className="potFlex">          
                <div>
                    <TotalSaved />
                </div>
                <div className="gridpotContainer">
                    <SmallerSaved />
                    <SmallerSaved />
                    <SmallerSaved />
                    <SmallerSaved />
                </div>   
            </div>           
        </div>
    )
}

export default Pots;