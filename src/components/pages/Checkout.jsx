import './checkout.css'
import { CarrinhoContext } from '../../context/CarrinhoContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
    const {carrinho,removeCarrinho} = useContext(CarrinhoContext);
    let valorTotal = 0;
    let nomeProdutos = [];
    for(let produto of carrinho){
        valorTotal = valorTotal+(produto.preco*produto.quantidade)
        nomeProdutos.push(produto.quantidade + ' ' + produto.nome);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const endereco = {
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            bairro: data.bairro,
            complemento: data.complemento,
            cidade: data.cidade,
            estado: data.estado
        }
        const dadosCartao = {
            numeroCartao: data.numeroCartao,
            nomeTitular: data.userName,
            dataValidade: data.dataValidade,
            codigoSeguranca: data.codigoSeguranca,
            parcelasCompra: data.parcelas,
            precoFinal: valorTotal
        }
        const dadosPedido = {
            produtosPedid: nomeProdutos,
            precoFinal: valorTotal
        }
        console.log("endereço")
        console.log(endereco)
        console.log("dados do cartao")
        console.log(dadosCartao)
        console.log("dados do pedido")
        console.log(dadosPedido)
        
        //alert(`Olá ${data.userName}, seu pedido efetuado com sucesso!`);
        //window.location.reload(false);
    }


   return ( 
    <body>
        <form class="containerCheckout" onSubmit={handleSubmit}>
            <div class="containerEndereço">
                <h2 class="tituloPadrao">1 - Endereço de entrega</h2>
                    <li class="containerLista"><label class="boxEndereço" for="cep">CEP *</label></li>
                    <li class="containerLista"><input class="addEndereço" name="cep" required=""  id="cep" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="rua">Rua/Avenida *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="rua" required=""  id="rua" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="numero">Número *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="numero" required=""  id="numero" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="bairro">Bairro *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="bairro" required=""  id="bairro" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="complemento">Complemento </label></li>
                    <li class="containerLista"><input class="addEndereço"name="complemento" id="complemento" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="cidade">Cidade *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="cidade" required=""  id="cidade" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="estado">Estado *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="estado" required=""  id="estado" type="text"/></li>
            </div>




            <div class="containerPagamento">
                <h2 class="tituloPadrao">2 - Formas de pagamento</h2>
                <div>
                    <i class="fa-solid fa-address-card"></i>
                    <h3 class="textoPagamento">Cartao de Crédito </h3>

                    <div class="exemploCartao">
                        <img class="imagemCartao" src="/cartao.png" alt="Cartao de crédito"/>
                        <p class="textoInformativo">
                            A MVP Esportes aceita várias bandeiras de cartão de crédito
                        </p>
                        <div class="icone">
                            <i class="fa-brands fa-cc-visa"></i>
                            <i class="fa-brands fa-cc-mastercard"></i>
                            <i class="fa-brands fa-cc-diners-club"></i>
                        </div>
                    </div>


                    <div>
                        <ul>
                            <li class="containerLista">
                                <label class="tituloCartao" for="numeroCartao">
                                    Número do Cartão
                                </label>
                            </li>
                            <li class="containerLista">
                                <input  class="dadosCartao"
                                    name="numeroCartao" 
                                    required="" 
                                    id="numeroCartao"
                                    type="text" 
                                    placeholder="  0000.0000.0000.0000"
                                    pattern="\d{4}\.\d{4}\.\d{4}.\d{4}" 
                                    title="Digite um CPF no formato: xxxx.xxxx.xxxx.xxxx"/>
                            </li>

                            <li class="containerLista">
                                <label class="tituloCartao" for="usertName">Nome do Titular</label>
                            </li>
                            <li class="containerLista">
                                <input class="dadosCartao" name="userName" required="" id="userName" type="text"/>
                            </li>

                            <li class="containerLista">
                                <label class="tituloCartao" for="dataValidade">Data de Validade</label>
                            </li>
                            <li class="containerLista">
                                <input class="dadosCartao" name="dataValidade"
                                    required=""  
                                    id="dataValidade" 
                                    type="text"
                                    placeholder="MM/AA"
                                    pattern="\d{2}\/\d{2}" 
                                    title="Digite uma data no formato: xx/xx"/>
                            </li>
                                    
                            <li class="containerLista">
                                <label class="tituloCartao" for="codigoSeguranca">Código de Segurança   
                                <i class="fa-solid fa-credit-card"></i>
                                </label>
                            </li>
                            <li class="containerLista">
                                <input class="dadosCartao" name="codigoSeguranca"
                                            required=""  
                                            id="codigoSeguranca" 
                                            type="text"/>
                            </li>
                            

                            <li class="containerLista">
                                <label class="tituloCartao" for="select">Parcelamento</label>
                            </li>
                            <li class="containerLista">
                                <select class="parcelamento" name="parcelas">
                                    <option value="0">Selecione a quantidade de parcelas</option>
                                    <option value="1">1x de R$ 229,98 sem juros</option>
                                    <option value="2">2x de R$ 114,99 sem juros</option>
                                    <option value="3">3x de R$ 76,66 sem juros</option>
                                    <option value="4">4x de R$ 56,50 sem juros</option>
                                    <option value="5">5x de R$ 46,00 sem juros</option>
                                </select>
                            </li> 
                        </ul>

                    </div>
                </div>

                <div class="boletoBancario">
                    <h3 class="textoPagamento"><i class="fa-solid fa-barcode"></i>  Boleto Bancário</h3>
                </div>
                
                <div class="pagamentoPix">
                
                    <h3 class="textoPagamento"> <i class="fa-brands fa-pix"></i>  PIX</h3>  
                </div>
            </div>

            <div class="containerFinal">
                <div class="containerConfirmaçao">
                    <h3 class="tituloPadrao">3 - Revisar Itens e Envio </h3>
                    

                    {carrinho.map(produto => (
                        <div>
                            <img className='imagemProduto' src={produto.imagem} alt={produto.nome}/>
                            <div className="organizacaoProduto">
                                <p className="tituloProduto">{produto.nome}</p>
                                <p className="descriçaoProduto">Quantidade: {produto.quantidade}</p>
                                <p className="preço">R$ {produto.preco}</p>
                            </div>
                        </div>
                    ))}


                    <div>

                        <div class="cupom">
                            <label class="cupomDesconto" for="textName">Cupom de Desconto:</label>
                            <input class="cupomDesconto" name="textName" required="" id="textName" type="text"/>
                        </div>
                    </div>

                    <div class="envio">
                        <h4 class="textoEnvio"><i class="fa-solid fa-location-dot"></i>  Envio</h4>
                        <div class="boxEnvio">
                            <label><input name="boxPadrao" id="boxPadrao" type="radio" value="0"/> Padrão: Envio Gratuíto - Prazo: Até 10 dias uteis</label>  
                        </div>
                    </div>

                    <div class="finalizarCompra">
                        <h3 class="tituloPadrao">Resumo do Pedido</h3>

                        <table class="pedido">
                            <tr>
                                <td class="descriçaoPedido">Total em Produtos: ({carrinho.length})</td>
                                <td class="descriçaoPedido">R$ {valorTotal}</td>
                            </tr>
                            <tr>
                                <td class="descriçaoPedido">Frete</td>
                                <td class="descriçaoPedido">R$ 0.00</td>
                            </tr>
                            <tr>
                                <td class="totalPedido">Total</td>
                                <td class="totalPedido">R$ {valorTotal}</td>
                            </tr>
                        </table>

                        <button class="botaoCompras" type='submit'>Finalizar Compra</button>
                    </div>

                </div>
            </div>
        </form>
    </body>
    );
}

export default Checkout;