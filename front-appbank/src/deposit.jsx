import React, { useState, useEffect } from 'react'
import './depositsty.css'
import Axios from 'axios';

export default function Deposit() {
  const [depositList, setDeposit] = useState([]);
  const [amountdeposit, setamountdeposit] = useState(0);
  const [accoutUser, setaccoutUser] = useState("");
  const addDeposit = () => {
    Axios.post('http://localhost:3004/deposit', {
      amountdeposit:amountdeposit,
      accoutUser:accoutUser
    }).then((response) => {
      console.log(response)
      setDeposit([
        ...depositList,{ amountdeposit:amountdeposit,accoutUser:accoutUser}
      ]
      )
    })

  }
  return (
    <div className='container_deposit'>
      
      <aside className='aside'>
        <div className="custom">
          <div ><br></br><br></br>
            <h3>ฝากเงิน</h3>
          </div><br></br>
          <aside className="aside_deposit">
            <form >
              <div>
               จำนวนเงิน &nbsp;
                <input className='form'name='amountdeposit'  type='int'onChange={(event)=>{setamountdeposit(event.target.value)}} ></input><br></br><br></br>
                เลขบัญชี &nbsp;
                <input className='form' name='accoutUser' type='text' onChange={(event)=>{setaccoutUser(event.target.value)}}></input><br></br><br></br><br></br>
              </div>
              <input className="btn btn-success " type='submit' onClick={addDeposit} ></input>
            </form><br></br>
            <a href=""><button className="btn btn-danger"> ยกเลิก</button></a>

          </aside>
        </div>
      </aside>
      
    </div>
  )
}