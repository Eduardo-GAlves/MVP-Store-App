import React from "react";
import "./iconesLogin.css"


function LoginButton (props)  {
    return (
        <a class="icones" href={props.link}>
            <div class="boxBotton">
                <div class="logoFacebook">
                {props.icone}
                </div>
            </div>
        </a>
    )
}

export default LoginButton



