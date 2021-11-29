import React from 'react'
import { Link } from "react-router-dom";

import "./index.css"

export default function Layout(props) {

    return (
        <div className="app-header">
            <header className="header">Crypto'cres
            <div className="header">
                <button className="btn" id="walletBtn"> <Link to="/wallet">Wallet</Link> </button>
            </div>
            </header>
            <div className="main">
                <aside>
                    <ul className="menu">
                        <li><Link to="/"><span className="Title">Home</span></Link></li>
                        <li><Link to="/user">Profil</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/informations">About</Link></li>
                        <li> <Link to="/signin"> Signin </Link></li>
                    </ul>
                </aside>
                <main className="left">
                    {props.children}
                </main>
            </div>
        </div>        
    )
}