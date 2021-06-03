import React from 'react'
import {Link} from 'react-router-dom'

export default function Auth() {
    return (
        <div>
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
            <Link to="/TicketList">
                <div className="login-button">
                    Sign in
                </div>
            </Link>
            
            <Link to="/register">
                <div className="create-acc">
                    <div className="text-l">
                        Create account
                    </div>
                </div>
            </Link>
        </div>
    )
}
