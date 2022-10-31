import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
 return (<footer className={styles.footer}>
    

    <div className={styles.inscreva}>
        <h2>FAÇA PARTE DA FAMÍLIA</h2>
        <p>Insira seu e-mail e receba todas as notícias e promoções em primeira mão! </p>
        <label for="">E-mail:</label>
        <input type="email" name="email" id="email"></input>
        <button class="button-email">ENVIAR</button>
    </div>

    <div className={styles.localizador}>
        <h4>LOCALIZADOR DE LOJAS</h4>
        <p>Encontre a loja mais próxima de você</p>
        <button className={styles.button_footer}>BUSCAR MAIS LOJAS</button>
    </div>

    <div className={styles.sites_estrangeiros}>
        <h4>PELO MUNDO</h4>
        <p>Acesse o site de outros países</p>
        <select name="paises" className={styles.paises}>
            <option value="Brasil">BRASIL</option>
            <option value="EUA">EUA</option>
            <option value="Canada">CANADA</option>
            <option value="Espanha">ESPANHA</option>
        </select>
    </div>

    <div>
        <h4>SIGA A MVP</h4>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
            <li>
                <FaTwitter />
            </li>
            <li>
                <FaYoutube />
            </li>
        </ul>
    </div>
    <p className={styles.copy_right}><span>MVP Sports</span> &copy; 2022</p>
    <p>Rua do Parque, 361 Qd 145, Lt. Area 2, Goiânia - GO, 74343-240</p>
 </footer>
 )
}

export default Footer    