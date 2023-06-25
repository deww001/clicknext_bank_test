import React, { useState, useEffect, } from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Deposit from './deposit';
import Withdraw from './withdraw'
import Trasfer from './transfer'
import History from './history'
import './homestye.css'
import Axios from 'axios';

export default function Home() {
    const [acount, setacount] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/home')
            .then(res => res.json())
            .then(result => {
                setacount(result)
                console.log(result)
            })
    }, []);

    return (
        <div className="container">
            <BrowserRouter>
                <aside>
                    <div>
                        <NavLink end to={"/deposit"}>
                            <button className="btn btn-success me-2" >
                                ฝากเงิน
                            </button>
                        </NavLink >
                        <NavLink to={"/withdraw"}>
                            <button className="btn btn-success me-2">
                                ถอนเงิน
                            </button>
                        </NavLink>
                        <NavLink to={"/tranfer"}>
                            <button className="btn btn-success me-2">
                                โอนเงิน
                            </button>
                        </NavLink>
                        <NavLink to={"/history"}>
                            <button className="btn btn-success ">
                                ประวัติธุรกรรม
                            </button>
                        </NavLink>
                        <NavLink>
                            <button className="btn btn-primary">
                                LOGOUT
                            </button>
                        </NavLink>
                    </div>
                    <div >
                        {acount.map((val,key)=>{
                            console.log(val);
                            return(
                            <div className="box">
                                <p className='p1'>เงินคงเหลือ</p>
                                <p className='p2' >{val.money}</p>
                                <p className='p2'>บาท</p>
                            </div>
                            )
                            
                        }) }
                    </div>
                </aside>

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/deposit' element={<Deposit />}></Route>
                    <Route path='/withdraw' element={<Withdraw />}></Route>
                    <Route path='/tranfer' element={<Trasfer />}></Route>
                    <Route path='/history' element={<History />}></Route>
                </Routes>

            </BrowserRouter>



        </div>
    )
} 
