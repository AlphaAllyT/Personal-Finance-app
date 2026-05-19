 import React from "react"
import SmallerSaved from "./Smaller_Savings/SmallerSaved";
import "./billStyle.css";
import "./billStyleMedia.css";

function Bills() {   

    return (
        <div className="billContainer">
            <div className="billtitleFlex">
                <h2>Recurring Bills</h2>
                <p>See details ›</p>
            </div>
            <div className="billFlex">  
                <SmallerSaved />
                <SmallerSaved />
                <SmallerSaved />                  
            </div>           
        </div>
    )
}

export default Bills;