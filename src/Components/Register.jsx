import React from 'react'
import {Link} from 'react-router-dom'

export default function Register() {
    return (
        <div className="outher">
<div className="logo">
    <div className="text-l">
        PEPEGA
    </div>

</div>
        <div className="wrapper">
            <Link to="/">
                <div className=" back">    
                    <div className="text-r">
                        {"<"}
                    </div>
                </div>
            </Link>    
            

            <div className="text-r">
            Username
            </div>

            <div className="input">
                <input type="text" ></input>
            </div>

            <div className="text-r ">
            Password
            </div>

            <div className="input">
                <input type="password" ></input>
            </div>

            

            
            <Link to="/">
                <div className="login-button">Create</div>
            </Link>
        </div>
        </div>
    )
}
