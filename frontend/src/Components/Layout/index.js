import { props } from 'ramda'
import React from 'react'

import "./index.css"

export default function Layout(props) {

    return (
        <div className="app-header">
            <header>Ceci est le header</header>
            <div className="main">
                <aside className="menu">Ceci est la barre de côté</aside>
                <main style={{display: "flex", justifyContent: "center", width: "100%", padding: "2rem"}}>
                    {props.children}
                </main>
            </div>
        </div>
    )
}