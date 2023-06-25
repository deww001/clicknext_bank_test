import React, { useState, useEffect } from 'react'
import './depositsty.css'
import Axios from 'axios';

export default function Transfer() {

  var [TransferList, setTransfer] = useState([]);
  var [amountTransfer, setamountTransfer] = useState(0);
  var [accoutTransfer, setaccoutTransfer] = useState("");
  var [recipientid, setrecipientid] = useState("");

  var addTransfer = () => {
    Axios.post('http://localhost:3004/tranfer', {
      amountTransfer: amountTransfer,
      accoutTransfer: accoutTransfer,
      recipientid : recipientid
    }).then(() => {
      setTransfer([
        ...TransferList, {
          amountTransfer: amountTransfer,
          accoutTransfer: accoutTransfer,
          recipientid : recipientid
        }
      ]

      )
    })
  }
  return (
    <div className='container_deposit'>

      <aside className='aside'>
        <div className="custom" >
          <div className="h3"><br></br>
            <h3>โอนเงิน</h3>
          </div>

          <aside className="aside_deposit">
            <form>
              <div>
                <label>จำนวนเงิน</label> &nbsp;
                <input className='amountWithdraw' type='number' onChange={(event)=>{
                  setamountTransfer(event.target.value)
                } }></input><br></br><br></br>
                <label>โอนไปที่เลขบัญชี</label> &nbsp;
                <input className='recipientid' type='text' onChange={(event)=>{
                  setrecipientid(event.target.value)
                } }></input><br></br><br></br>
                <label>จำนวนเงิน</label> &nbsp;
                <input className='accoutWithdraw' type='text' onChange={(event)=>{
                  setaccoutTransfer(event.target.value)
                } }></input><br></br><br></br>
              </div>
              <input class="btn btn-success " type='submit'onClick={addTransfer} ></input>
            </form><br></br><br></br>
            <button class="btn btn-danger"  > ยกเลิก</button>
          </aside>
        </div>
      </aside>
    </div>
  )
}