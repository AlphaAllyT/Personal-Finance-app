import React from "react"
import SpendingChart from "./PieChart_React/PieChart";
import "./budgetStyle.css";
import "./budgetStyleMedia.css";

function Budget() {   

    return (
        <div className="budgetContainer">
            <div className="budgetFlex">
                <h2 className="budgetTitle">Budgets</h2>
                <p>See details ›</p>
            </div>
            <div> 
                <SpendingChart />
            </div>           
        </div>
    )
}

export default Budget;