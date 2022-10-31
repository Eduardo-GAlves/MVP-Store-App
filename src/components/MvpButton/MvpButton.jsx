import React from 'react'
import "./MvpButton.css"

function MvpButton(props) {
    return (
        <button className="estiloBotao">{props.tittle}</button>   
    ) 
}

export default MvpButton;

