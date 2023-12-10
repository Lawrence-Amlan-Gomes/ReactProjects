import classes from '../Styles/Nav.module.css';
import Account from './Account';
import logo from "../../assets/icon.png"
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} />
                            <h3>Lawrence Amlan</h3>
                    </Link>
                 </li>
            </ul>
            <Account/>

        </nav>
    )
}