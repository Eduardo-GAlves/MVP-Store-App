import { useState, useEffect, useContext } from "react";
import "./CardProdutoCarrinho.css";
import {CarrinhoContext} from '../../context/CarrinhoContext'

function CardProdutoCarrinho({produto, eventoRemover}) {
    const {saveCarrinho} = useContext(CarrinhoContext);

    const [quantidade,setQuantidade] = useState(produto.quantidade)
    // console.log('quantidade cardprodutocarrinho: '+produto)
    useEffect(()=>{
        if(quantidade<1)
        {
            setQuantidade(1)
        }
    },[quantidade])


    const handleQuantidadeProduto = (operacao) => {
        // return operacao === '+' ? setQuantidade(quantidade+1) : setQuantidade(quantidade-1) ;
        return operacao === '+' ? (addItemCarrinho()) : setQuantidade(quantidade-1) ;
    };

    const addItemCarrinho = ()=>{
        saveCarrinho(produto); 
        setQuantidade(quantidade+1);
    }

    const removerProdutoCarrinho = (produtoRemovido)=>{
        eventoRemover(produtoRemovido)
    }
   return ( 
      <div className="cardProdutoCarrinho">
            <div className="cardProdutoCarrinho__imagem">
                <img className="imagem_item" src={produto.imagem} alt={produto.nome} />   
            </div>
            <div className="cardProdutoCarrinho__dados">
                <div className="produto_cart">
                    <span >{produto.nome}</span>
                </div>
                <div className="produto_cart">
                    <span >Dados complementares do produto.</span>
                </div>
                <div className="produto_cart_valor">
                    <span>Valor unitário: R$ {produto.preco}</span>
                </div>
                <span> Quantidade: </span>
                <div className="cardProdutoCarrinho__dados__quantidade">
                        <button onClick={()=>(handleQuantidadeProduto('-'))}>-</button>
                        {quantidade}
                        <button onClick={()=>(handleQuantidadeProduto('+'))}>+</button>
                    </div>
                <div className="cardProdutoCarrinho__dados__subtotal">Sub-total:R$ {(quantidade*produto.preco).toFixed(2)}</div>
            <p className="remover_produto" onClick={()=>(removerProdutoCarrinho(produto))}>Remover item</p>
            </div>
        </div>
    );
}

export default CardProdutoCarrinho;