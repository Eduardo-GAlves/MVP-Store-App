import React from 'react'
import { useEffect, useState } from 'react'
// import CardProduto from '../CardProduto/CardProduto'
// import '../layout/ProductCard.css'

function ProductCard(props) {
  const [data, setData] = useState([])
  // const productCard = useRef(null)

  // DEV informou que fez esse trecho para acessar a lista de produtos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.dataUrl)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [props.dataUrl])

  return (
    // <div className="card">
    <>
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="productCard">
        {data.map(item =>(
          <CardProduto dadosProduto = {item}/>
          ))}  
        
      </div>
          </>
    // </div>
  )
}

export default ProductCard
