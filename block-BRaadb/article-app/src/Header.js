import React from "react";
import {Link} from 'react-router-dom'
import './style/header.css'
function Header(){
    return<>

    <header className="margin-l">
        <div className="margin-l">
        <i class="fa-solid fa-layer-group"></i>  
              <Link to='/' ><h2>Dashboard</h2></Link>
        </div>
        <input className="input-h" type="search" placeholder="Search Documentation..."/>
    </header>
    
    </>
}
export default Header;