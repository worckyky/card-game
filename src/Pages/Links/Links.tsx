import React from "react";
import s from './Links.module.css';
import {NavLink} from "react-router-dom";


const Links = ()=> {
    return (
        <div className={s.links__container}>
            <NavLink to={'/component-view'} activeClassName={s.link__active} className={s.link__default}>Preview</NavLink>
            <NavLink to={'/login'} activeClassName={s.link__active} className={s.link__default}>Login</NavLink>
            <NavLink to={'/profile'} activeClassName={s.link__active} className={s.link__default}>Profile</NavLink>
            <NavLink to={'/registration'} activeClassName={s.link__active} className={s.link__default}>Registration</NavLink>
            <NavLink to={'/recover'} activeClassName={s.link__active} className={s.link__default}>Recover</NavLink>
            <NavLink to={'/add-pass'} activeClassName={s.link__active} className={s.link__default}>AddPass</NavLink>
        </div>
    )
}

export default Links