import { props } from 'ramda'
import React from 'react'

import "./index.css"

export default function Layout(props) {

    return (
        <div className="app-header">
            <header className="header">Ceci est le header</header>
            <div className="main">
                <aside className="menu">
                    <ul>
                        <li><a href="#"><span class="Title">Home</span></a></li>
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