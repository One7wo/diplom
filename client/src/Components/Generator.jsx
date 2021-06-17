import React from 'react'
import copy from '../assets/img/copy.svg'
import check from '../assets/img/check.svg'

export default function Generator() {
    return (
        <div className="generator">
                    <div className="generate">
                        <div className="text-r">Generate a keyword</div>
                        <div className="gen-button">
                            <img src={check} alt="generate"/>
                        </div>
                    </div>
                    
                    <div className="keyword">
                        <div className="text-b">Your keyword:</div>
                        <div className="pass-gen ">
                        <input type="text" placeholder="Click generate" disabled />
                        </div>
                        <div className="copy-button! disabled">
                            <img src={copy} alt="copy"/>
                        </div>
                    </div>
        </div>
    )
}
