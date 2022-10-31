import './CardProduto.css'
import { Link } from 'react-router-dom'
import Produto from '../pages/Produto';

function CardProduto({dadosProduto}) {
   return ( 
      <Link className='cardLink' to={"/produto/"+dadosProduto.id}>
         <div className="cardProduto" key={dadosProduto.id}>
            <div className="image">
               <img src={dadosProduto.imagem} alt={dadosProduto.nome} object-fit={'fill'} />
            </div>
            <div className="info">
               {/*{dadosProduto.nome && dadosProduto.precoOriginal && dadosProduto.preco && (*/}
                  <div>
                  <span className="name">{dadosProduto.nome}</span>
                  <span className="oldPrice">R$ {dadosProduto.precooriginal}</span>
                  <span className="price">R$ {dadosProduto.preco}</span>
               </div>
               {/*})}*/}
            </div>
         </div>
      </Link>
    );
}

export default CardProduto;