import React from 'react'
import './laptop.css'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
export const Laptop = () => {
    return (
        <div className="laptop">
            <p>Whoops! I'm in laptop mode.</p>
            <p>But if you see anything below me, i am now in Big Screen mode</p>
        </div>
    )
}