import React from "react"
import PieChart from "./Total_Savings/PieChart";
import SmallerSaved from "./Smaller_Savings/SmallerSaved";
import "./budgetStyle.css";
import "./budgetStyleMedia.css";

function Budget() {   

    return (
        <div className="budgetContainer">
            <div className="budgetFlex">
                <h2 className="budgetTitle">Budgets</h2>
                <p>See details ›</p>
            </div>
            <div className="moneyFlex">          
                <div className="align">
                    <PieChart />
                </div>
                <div className="gridmoneyContainer">
                    <SmallerSaved />
                    <SmallerSaved />
                    <SmallerSaved />
                    <SmallerSaved />
                </div>   
            </div>           
        </div>
    )
}

export default Budget;