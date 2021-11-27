import React from 'react'
import './desktop.css'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
export const Desktop = () => {
    return (
        <div className="desktop">
            <p>Whoops! I'm in desktop mode.</p>
            <p>But if you see anything below me, i am now in Laptop mode</p>
        </div>
    )
}