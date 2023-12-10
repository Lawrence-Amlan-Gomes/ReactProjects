import { Children } from "react"
import Nav from "./Nav"
import classes from '../Styles/Layout.module.css';

export default function Layout({children}){
    return(
        <>
            <Nav/>
            <main className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>
            </main>
        </> 
    )
}