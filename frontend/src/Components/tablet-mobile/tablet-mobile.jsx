import React from "react";
import "./tablet-mobile.css";
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
export const TabletMobile = () => {
  return (
    <div className="tablet-mobile">
      <p>Whoops! I'm in tablet-mobile mode.</p>
      <p>But if you see anything below me, i am now in Desktop mode</p>
    </div>
  );
};