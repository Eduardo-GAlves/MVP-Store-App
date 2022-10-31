import React from 'react'
import "./MvpInput.css"

function MvpInput({textoLabel, typeInput, nameInput, id, placeholderInput}) {
    return (
        <form>
            <label className='boxLabel'
            for={id}>
                {textoLabel}
            </label>
            <input className="boxInput"
               type={typeInput}
               name={nameInput}
               id={id}
               placeholder={placeholderInput}>
            </input>
        </form>   
    ) 
}

export default MvpInput;

