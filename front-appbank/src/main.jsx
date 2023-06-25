import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import Home from './home.jsx'
import Deposit from './deposit.jsx'
import Withdraw from './withdraw.jsx'
import Transfer from './transfer.jsx'
import History from './history.jsx'
import './index.css'
import  'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

/* ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Login />
  

) */
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Home />
  
)
/* ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Deposit />
) */
/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Withdraw />
  </React.StrictMode>,

)*/

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Transfer />
  </React.StrictMode>, 

)/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <History />
  </React.StrictMode>

)*/

