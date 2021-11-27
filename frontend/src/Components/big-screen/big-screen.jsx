import React from 'react'
import './big-screen.css'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
export const BigScreen = () => {
    return (
        <div className="big-screen">
            <p>Whoops! I'm in big screen mode.</p>
            <p>This is the base of the pyramid</p>
        </div>
    )
}