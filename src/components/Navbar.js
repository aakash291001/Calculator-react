import React, { useState } from 'react'
import "../App.css";
export default function Navbar(props) {
    
    let headStyle={
        fontWeight: 'bolder',
        fontFamily: 'cursive',
        fontSize: 'xx-large',
        color: props.theme==='light'?'#FBEEC1':'#659dbd'
      }
  return (
    <>
        <nav className={`navbar navbar-${props.theme} bg-${props.theme==='light'?'secondary':'dark'}`} style={{border:'2px solid white'}}>
        <a class="navbar-brand" href="/" style={headStyle}>
        {props.title}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
            <button type="button" value = {props.theme} onClick={props.changeTheme} className={`btn btn-${props.theme==='light'?'dark':'light'}`}>{`Enable ${props.theme==='light'?'Dark':'Light'}`}</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
