import './Cart.css'
import { AiOutlineShoppingCart } from "react-icons/ai"
import CardProdutoCarrinho from '../CardProdutoCarrinho/CardProdutoCarrinho';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CarrinhoContext} from '../../context/CarrinhoContext'


function Cart(props){
    const {carrinho,removeCarrinho} = useContext(CarrinhoContext);

    // const [listaProdutos, setListaProdutos] = useState(carrinho);

    // const handleLimparListaProduto = () =>{
    //     setListaProdutos([])
    // }

    const handleListaProdutoRemoverItem = (produto) =>{
        removeCarrinho(produto)
        
    }

    return (
        <div className="menuCart">
            <input type="checkbox" className="check_cart" id="check_cart"/>
            <label htmlFor="check_cart" className="checkbtn_cart">
                <i className="menu_cart">  < AiOutlineShoppingCart /></i>
            </label>

            <div className="itens_cart">
                <div className="titulo_cart">MEU CARRINHO</div>

                {carrinho.map( (produtosCarrinho) => 
                        <CardProdutoCarrinho key={produtosCarrinho.idCarrinho}
                            eventoRemover={handleListaProdutoRemoverItem} 
                            produto={produtosCarrinho} 
                        />
                    )
                }
                
                <div className="itens_cart__total">
                    TOTAL: R$ {carrinho.reduce((total,item) => total+(item.preco*item.quantidade),0)}
                </div>
                <div><Link to="/Checkout" >
                    <button className="button_finalizarCompra" >
                            Fechar pedido
                    </button>
                        </Link>
                    <button className="button_finalizarCompra" >Esvaziar Carrinho</button>
                </div>
            </div>
        </div>
    )
   }
   
export default Cart