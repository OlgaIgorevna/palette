import React from 'react';
import {
    NavLink
} from "react-router-dom";
import "./index.css"

const Menu= ()=>{


    return(

            <ul className={"menu"}>
                <li className={"menu-elem"}>
                    <NavLink to="/" activeClassName={"active"} exact={true}>Форма</NavLink>
                </li>
                <li className={"menu-elem"}>
                    <NavLink to="/palette" activeClassName={"active"} exact={true}>Палитра</NavLink>
                </li>
            </ul>

    )

};
export default Menu;