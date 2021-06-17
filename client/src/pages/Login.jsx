import React from 'react'
import {Link , BrowserRouter, Route, Switch} from 'react-router-dom'
import '../Login.scss'
import { Auth, Register } from '../Components';

export default function Login() {
    return (
        <div className="outher">
<div className="logo">
    <div className="text-l">
        PEPEGA
    </div>

</div>
        <div className="wrapper">
            <Auth/>
       
        </div>
        </div>
    )
}
