import classes from '../Styles/Nav.module.css';
import Account from './Account';
import logo from "../../assets/icon.png"

export default function Nav(){
    return(
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logo} />
                            <h3>Lawrence Amlan</h3>
                    </a>
                 </li>
            </ul>
            <Account/>

        </nav>
    )
}