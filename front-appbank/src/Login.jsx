
import React, { useState, useEffect,} from 'react'
import './login.css'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

export default function Login() {

  const [phone, setphone] = useState("");
  const [cardid, setcardid] = useState("");
  const [userloginList, setuserlogin] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3004/login')
      .then(res => res.json())
      .then(result => {
        setuserlogin(result)
        console.log(result)
      })
  }, [])

  const checklogin = () => {
    Axios.post('http://localhost:3004/login', {
      phone: phone,
      cardid: cardid
    }).then(() => {
      setuserlogin([
        {
          phone: phone,
          cardid: cardid
        }
      ])
    })
  }
  return (
    <div className=''>

      <aside className='aside_1'>
        <div class='from_login' >
          <aside className='aside_2'>
            <br></br><br></br><br></br><br></br><h3>LOGIN</h3><br></br>
            <from action="logincheck" >
              <div>
                <label>เบอร์โทรศัพท์</label>
                <input className='phone_user'name='phone' type='text' onChange={(event) => {
                  setphone(event.target.value);
                }}></input><br></br>
              </div><br></br><br></br>
              <div><label>บัตรประชาชน</label>
                <input className='number_user'name='cardid' type='text' onChange={(event) => {
                  setcardid(event.target.value);
                }}></input>
              </div><br></br><br></br>
              <input className='button' type='submit' onClick={checklogin}></input>
            </from>
          </aside>
        </div>
      </aside>
    </div>
  )
}