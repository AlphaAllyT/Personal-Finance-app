import { useState } from 'react';
import CurrentBalance from './components/Current_Bal/CurrentBal';
import Pots from './components/pots-finance/pots';
import Transaction from './components/Transactions/Transaction';
import Budget from './components/Budgets/budget';
import Bills from './components/Recurring-Bills/Bills';
import TemporaryDrawer from './components/Drawer_Left_Menu/Drawer';
import './App.css';
import './AppMedia.css';

function App() {

  return (
    <div>
      <div className='navbar'>
        <h1>Overview</h1>
        <div className='menu'>
          <TemporaryDrawer />
        </div>
      </div>
      <div className='currentBalance'>
        <CurrentBalance />
        <CurrentBalance />
        <CurrentBalance />
      </div>
      <div className='gridContainer'>
        <div>
          <Pots />
          <Transaction />
        </div>
        <div>
          <Budget />
          <Bills />
        </div>
      </div>
    </div>
  )
}

export default App
