import React from 'react'
import { useRef } from 'react'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io'
// import { Link } from 'react-router-dom'
import '../CarouselSection/CarouselSection.css'
import ProductCard from '../CardProduto/CardProduto'

function CarouselSection({data, title}) {


  

  // const [data, setData] = useState([props.dataUrl])
  const carousel = useRef(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(props.dataUrl)
  //       const data = await response.json()
  //       setData(data)
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }

  //   fetchData()
  // }, [props.dataUrl]);

  const handleLeftClick = e => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleRightClick = e => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  // if (!data || !data.length) return null

  return (
    <div className="carousel">
      <div className="carousel__tittle">
        <h1>{title}</h1>
      </div>

      <div className="carousel__itens" ref={carousel}>
        {data.map( produto => (
          <ProductCard dadosProduto={produto} key={produto.id}/>
        ))}
      </div>

      <div className="buttons">
        <IoMdArrowDropleftCircle onClick={handleLeftClick} />
        
        <IoMdArrowDroprightCircle onClick={handleRightClick} />
        
      </div>
    </div>
  )
}

export default CarouselSection
