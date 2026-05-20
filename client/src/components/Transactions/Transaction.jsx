import React from "react"
import Description from "./Description/Description";
import "./TransactionStyle.css";
import "./TransactionStyleMedia.css";

function Transaction() {   

    return (
        <div className="transactionContainer">
            <div className="transactionFlex">
                <h2>Transaction</h2>
                <p>View All ›</p>
            </div>
            <div className="discriptionFlex">  
                <Description />   
                <Description /> 
                <Description /> 
                <Description />
            </div>           
        </div>
    )
}

export default Transaction;