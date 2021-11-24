import { props } from 'ramda'
import React from 'react'

import "./index.css"

export default function Layout(props) {

    return (
        <div className="app-header">
            <header className="header">Crypto Web</header>
            <div className="main">
                <aside>
                    <ul className="menu">
                        <li><a href="#"><span className="Title">Home</span></a></li>
                        <li><a href="#">User</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Informations</a></li>
                    </ul>
                </aside>
                <main className="left">
                    {props.children}
                </main>
            </div>
        </div>
    )
}