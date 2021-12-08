import React from 'react'
import { Link } from "react-router-dom";
import "./index.css"

export default function Layout(props) {

    return (
        <div className="app-header">
            <header className="header">Crypto'cres
            <div className="header">
                <button className="btn" id="walletBtn">
                    <Link to="/wallet">Wallet</Link> 
                </button>
            </div>
            </header>
            <div className="main">
                <aside>
                    <div className="dropdown">
                        <button className="btnMenu">Menu</button>
                        <div className="dropdownM">
                            <Link to="/home"><span className="Title">Home</span></Link>
                            <Link to="/user">Profil</Link>
                            <Link to="/informations">About</Link>
                        </div>
                    </div>
                    <ul className="menu">
                        <li><Link to="/home"><span className="Title">Home</span></Link></li>
                        <li><Link to="/user">Profil</Link></li>
                        <li><Link to="/informations">About</Link></li>
                    </ul>
                </aside>
                <main className="left">
                    {props.children}
                </main>
            </div>
        </div>        
    )
}