import React, { useState, useEffect } from 'react';
import CarouselSection from '../CarouselSection/CarouselSection'
import axios from 'axios';
import Produto from './Produto';
import { MVPBD } from '../../data/MVPBD';


const Home = () => {
  /*
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
  return (
    <div>
      <CarouselSection
      data = {MVPBD.produtos} // pra pegar do fake bd
        //data={produto} pra pegar do backend
        title={'Novidades'}
      />
    </div>
  )
}

export default Home
