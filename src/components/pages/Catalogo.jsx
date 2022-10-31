// import React, { useState } from 'react'
import InputSearch from '../InputSearch/InputSearch'
import CardProduto from '../CardProduto/CardProduto';
import '../pages/Catalogo.css'
import { MVPBD } from '../../data/MVPBD';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Catalogo(){

  /* Pegar dados do backend
  const[ produto, setProduto] = useState([])

  useEffect(() => {
    axios.get("http://localhost/produtos")
    .then((response) => {
      setProduto(response.data)
    })

    .catch(() => {
      console.log("Deu errado")
    })
  }, [])
  */

    //const data = produto Para pegar doo backend
    const data = MVPBD.produtos

    return (
        <div className='catalogo'>
            <InputSearch />
            <div className="catalogo__produtos">
                {data.map(produto => (
                    <>
                    <CardProduto dadosProduto={produto} />
                    </>
                ))}
            </div>
        </div>
           
           
    )
}
   
   export default Catalogo