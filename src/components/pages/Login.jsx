import React from 'react'
import './login.css'
import AsainBtn from '../AsainBtn/AsainBtn'
import MvpModal from '../MvpModal/MvpModal'
import { useState } from 'react'
// import IconesLogin from '../iconesLogin/iconesLogin'
import {FaFacebook} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';
import {FaApple} from 'react-icons/fa';
import LoginButton from '../iconesLogin/iconesLogin'



function Login(){
    const [isForgotPwdVisible, setVisibilityForgotPwd] = useState(false);
    
    return (
        <div>
            <br></br>
            <h1>Login</h1>
            <div class="containerBox">
                <div class="box">
                    <div class="containerAtalho">
                        <h2 class="tittleBox">Acesso Fácil</h2>
                        <p class="informacaoAtalho">Conecte-se usando seu cadastro de outra plataforma</p>

                        <LoginButton link="https://www.facebook.com/?stype=lo&jlou=Aff6ay8lo4mdv51KfF6uKnSAeT6zdw7t5r0iCDanp55Xjq7Q5yLCTzfLBhguqEqPdb-rJ0F_ESCFCU41pitRvhDgJazFHk6d14uYa-d3c1W0Jg&smuh=50996&lh=Ac9NuL5bEKbvzFEV3MU" icone={<div class="facebook"><FaFacebook/></div>}/>
                        <LoginButton link="https://www.facebook.com/?stype=lo&jlou=Aff6ay8lo4mdv51KfF6uKnSAeT6zdw7t5r0iCDanp55Xjq7Q5yLCTzfLBhguqEqPdb-rJ0F_ESCFCU41pitRvhDgJazFHk6d14uYa-d3c1W0Jg&smuh=50996&lh=Ac9NuL5bEKbvzFEV3MU" icone={<div class="google"><FaGoogle/></div>} />
                        <LoginButton link="https://appleid.apple.com/sign-in" icone={<div class="apple"><FaApple/></div>}/>

                    </div>

                    <div class="containerLogin">
                        <h2 class="tittleBox">Tenho cadastro</h2>

                        <ul class="listLogin">
                            <li class="listEmail"><label for="email">E-mail *</label></li>
                            <li class="listEmail"><input class="listInput" name="email" required="" id="email" type="text"/></li>
                            <li class="listEmail"><label for="senha">Senha *</label></li>
                            <li class="listEmail"><input class="listInput" name="senha" required=""  id="senha" type="password"/></li>
                        </ul>
                        
                        <div containerFooter>

                            <div class="boxConexao">
                                <input  name="conexao" id="conexao" type="checkbox" value="aceitar"/>
                                <label  for="conexao"> MANTELHA-ME CONECTADO </label>
                            </div>

                            <div class="passwordLost">
                                {isForgotPwdVisible ? <MvpModal onClose={()=> setVisibilityForgotPwd(false)} title='Recuperar Senha'/> : null}
                                <i onClick={()=>{setVisibilityForgotPwd(true)}} >Esqueci minha senha</i>
                            </div>
                            
                            <div class="botaoLogin">
                                <AsainBtn titulo="entrar"/>
                                </div>

                            {/* <div class="botaoCadastro"><button>CRIAR UMA CONTA</button></div> */}
                            <div class="botaoCadastro">
                                <AsainBtn titulo="CRIAR UMA CONTA"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
   
   export default Login