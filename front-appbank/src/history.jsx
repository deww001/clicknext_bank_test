import React, { useState, useEffect, } from 'react'
import './depositsty.css'

export default function History() {
    const [history, sethistory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3004/history')
            .then(res => res.json())
            .then(result => {
                sethistory(result)
                console.log(result)
            })
    }, []);

    return (
        <div className="container_deposit ">

            {history.map((val, key) => {
                console.log(val);
                return (
                    <div className=" card">
                        <div className=" card-body ">
                            <p className='card-text'>รายการ :{val.id}</p>
                            <p className='card-text'>กิจกรรม :{val.activity}</p>
                            <p className='card-text'>จำนวนเงิน: {val.amount}</p><br></br>
                        </div>
                    </div>
                )
            })}
        </div>



    )
}

