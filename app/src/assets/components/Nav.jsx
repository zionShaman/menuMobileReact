// eslint-disable-next-line
import React, { Component } from 'react';


export default function Nav(){
    return(
        <nav id="nav">
            <button id="btn-mobile">Menu<span id="hamburger"></span></button>
            <ul id="menu">
                <li><a href="/">Sobre</a></li>
                <li><a href="/">Produtos</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contato</a></li>
            </ul>
        </nav>
    )
}
 
//    Javascrip do MenuMobile  ---   antesDoReact
 
const btnMobile = document.getElementById('btn-mobile');
 // cria funçao pra selecionar o botao MENU 

function toggleMenu(){
// funçao pra o evento que ativa a const do MENU
    if(event.type === 'touchstart') event.preventDefault(); 
    // resolve o double click do 'touchstart'
    const nav = document.getElementById('nav'); 
    // selecionar o nav do html
    nav.classList.toggle('active');         
    // adiciona class ao nav   // vs .add .remove 
    //OR toggle= adiciona se nao tem, remove se tem
}   

btnMobile.addEventListener('click', toggleMenu); 
// evento que ativa o botao MENU click

// no mobile esse evento click(addEventListener('click', toggleMenu)
        // emula o evento de touch, mas demora 300ms 
btnMobile.addEventListener('touchstart', toggleMenu); 
// touchstart cria standad click event after touch event
        // menu abriria e fecharia porque evento se repetem..... 
        // criar IF in toggleMenu()