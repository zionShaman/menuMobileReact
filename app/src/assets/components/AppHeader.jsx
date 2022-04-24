// eslint-disable-next-line
import React, { Component } from 'react';
import logo from '../../logo.svg';
import Nav from "./Nav.jsx";

export default function AppHeader(){
    return(
        <div className="header">
            <div className="App-marca">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React!</h2>
            </div>
            <Nav />
        </div>
    )
}
/*
<header id="header">
        <a id="logo" href="./">Logo</a>
        <nav id="nav">
            <button id="btn-mobile">Menu<span id="hamburger"></span></button>
            <ul id="menu">
                <li><a href="/">Sobre</a></li>
                <li><a href="/">Produtos</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contato</a></li>
            </ul>
        </nav>
    </header>
    */