import './MVPProdutoGaleria.css'

function MVPProdutoGaleria({imagem}) {
   return ( 
      <div className="produto__imagem">
         <aside className="produto__galeria">
            {/* Acrescentar para renderizar a lista de imagens que será recebida por props, limitando até x imagens ou com efeito carrossel */}
            
            {/* <a href="#"><img src={imagem} alt=""/></a> */}
            {/* <a href="#"><img src={imagem} alt=""/></a>
            <a href="#"><img src={imagem} alt=""/></a>
            <a href="#"><img src={imagem} alt=""/></a> */}
         </aside>
         <div className="produto__vizualizacao">
            <img src={imagem} alt=""/>
         </div>
      </div>
    );
}

export default MVPProdutoGaleria;