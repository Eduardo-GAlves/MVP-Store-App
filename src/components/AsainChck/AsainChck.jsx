import './AsainChck.css'

function AsainChck({opcoes, name}) {
   return ( 
/*Deverá receber um objeto contendo:
 Classe: alguma classe adicional para estilização do componente
 name: nome do grupo do componente
 value: valor do componente selecionado
 id,  for: link entre label e input componente selecionado
 conteudo: conteúdo a ser apresentado no componente
*/
      <div className="produto__cores__opcoes">
         {opcoes.map((opcao, indice) => {
            return(
            // <div>{opcao}</div>
            <div key={indice} className="produto__cores__opcoes__item input-radio-hckdv">
               <input type="radio" name={name} value={opcao.value} id={opcao.id + name}/>
               <label htmlFor={opcao.id + name} id={opcao.id + name}>{opcao.conteudo}</label>
            </div>
            )
         })}
       
      </div>
         

    );
}

export default AsainChck;