import React, { useState, useEffect } from 'react'
import './depositsty.css'
import Axios from 'axios';

export default function Withdraw() {

  const [WithdrawList, setWithdraw] = useState([]);
  var [amountWithdraw, setamountWithdraw] = useState(0);
  const [accoutWithdraw, setaccoutWithdraw] = useState("");
  const addWithdraw = () => {
    Axios.post('http://localhost:3004/withdraw', {
      amountWithdraw: amountWithdraw,
      accoutWithdraw: accoutWithdraw
    }).then(() => {
      setWithdraw([
        ...WithdrawList, {
          amountWithdraw: amountWithdraw,
          accoutWithdraw: accoutWithdraw
        }
      ]

      )
    })
  }

  return (
    <div className='container_deposit'>
      <aside className='aside'>
        <div className="custom">
          <div className="h3"><br></br><br></br>
            <h3>ถอนเงิน</h3>
          </div>
          <aside className="aside_deposit">
            <form>
              <div><br></br>
                <label>จำนวนเงิน</label> &nbsp;
                <input className='amountWithdraw' type='number' onChange={(event) => {
                  setamountWithdraw(event.target.value)
                }}></input><br></br><br></br>
                <label>เลขบัญชี</label> &nbsp;
                <input className='accoutWithdraw' type='text' onChange={(event) => {
                  setaccoutWithdraw(event.target.value)
                }}></input><br></br><br></br><br></br>
              </div>
              <input class="btn btn-success " type='submit' onClick={addWithdraw}></input>
            </form><br></br>
            <button class="btn btn-danger"  > ยกเลิก</button>
          </aside>
        </div>
      </aside>
    </div>
  )
}