import React from 'react'
import "./index.css"

export default function login(props) {

    return (
        <div className="app-header2">
            <header className="header2">Crypto'cres</header>
            <div className="main2">
                <main className="left2">
                    {props.children}
                </main>
            </div>
        </div>        
    )
}