import React from 'react'
import './mobile.css'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
export const Mobile = () => {
    return (
        <div className="mobile">
            {/* <p>Whoops! I'm in mobile mode.</p> */}
        </div>
    )
}