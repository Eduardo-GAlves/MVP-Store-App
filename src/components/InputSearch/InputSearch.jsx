import React, { useState } from 'react'
import '../InputSearch/InputSearch.css'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { faSearch } from '@fontawesome/free-solid-svg-icons'
import { FiSearch } from "react-icons/fi"

const InputSearch = () => {
  const [pesquisaProduto, setPesquisaProduto] = useState("")
  const handlePesquisaProduto = ()=>{
    setPesquisaProduto(document.querySelector("#search-item").value)
    }
  return (
    <form className='inputSearch'>
    {/* <FontAwesomeIcon icon={faSearch} /> */}
    <FiSearch/>
    <input
      type="text"
      name=""
      data-search={pesquisaProduto}
      id="search-item"
      placeholder="Buscar Produtos" onkeyup="search()"
      onChange={handlePesquisaProduto}
    />
  </form>
  )
}

export default InputSearch