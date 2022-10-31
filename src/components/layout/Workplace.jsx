import {  Routes, Route } from 'react-router-dom'
import './Workplace.css'

import Home from '../../components/pages/Home'
import Login from '../../components/pages/Login';
import Cadastro from '../../components/pages/Cadastro';
import Catalogo from '../../components/pages/Catalogo';
import Carrinho from '../../components/pages/Carrinho';
import Produto from '../../components/pages/Produto';
import Checkout from '../pages/Checkout';

function Workplace() {
   return ( 
      <div className="workplace">
         <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/Login" element={<Login/>}/> 
            <Route path= "/Cadastro" element={<Cadastro/>}/> 
            <Route path= "/Catalogo" element={<Catalogo/>}/>
            <Route path= "/Carrinho" element={<Carrinho/>}/> 
            {/* <Route path= "/Produto" element={<Produto/>}/>  */}
            <Route path= "/Produto/:id" element={<Produto/>}/> 
            <Route path= "/Checkout" element={<Checkout/>}/> 
          </Routes>
      </div>
    );
}

export default Workplace;