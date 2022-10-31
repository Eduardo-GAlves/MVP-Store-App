import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/logo-mvp.png'
import { AiOutlineMenu } from "react-icons/ai"
import Cart from './Cart'

function Navbar(props){
    return (
        <nav className={styles.menuNav}>
                <div className={styles.logo_loja}>
                    <Link to="/" className={styles.logo}>
                        <img className={styles.logo_mvp} src={logo} alt="logo MVP" />
                    </Link>
                </div>
                <div className={styles.cart}>
                            <Cart className={styles.cart}/>
                </div>
                <div className={styles.menu_loja}>
                    <input type="checkbox" className={styles.check} id="check"/>
                    <label htmlFor="check" className={styles.checkbtn}>
                        <i className={styles.menu}>  < AiOutlineMenu /></i>
                    </label>
                    
                    <ul className={styles.list}>
                        <li className={styles.secao_menu}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.secao_menu}>
                            <Link to="/login">Login</Link>
                        </li>
                        <li className={styles.secao_menu}>
                            <Link to="/cadastro">Cadastro</Link>
                        </li>
                        <li className={styles.secao_menu}>
                            <Link to="/catalogo">Catálogo</Link>
                        </li>
                        <li className={styles.secao_menu}>
                            <Link to="/produto">Produto</Link>
                        </li>
                        
                    </ul>
                    
                </div>
        </nav> 
    )
   }
   
export default Navbar