import React from "react";
import{Link} from 'react-router-dom';
function Aside(){
    return<div className="aside">
        <ul>
            <li className="aside-li "><Link className="margin-l" to='/'><i class="fa-solid fa-house"></i>  <h4>Home</h4></Link></li>
            <li className="aside-li "><Link className="margin-l" to='/article'><i class="fa-solid fa-a"></i>  <h4>Article</h4></Link></li>
            <li className="aside-li "><Link className="margin-l" to='/people'><i class="fa-solid fa-people-line"></i> <h4>People</h4></Link></li>
            <li className="aside-li "><Link className="margin-l" to='/book'><i class="fa-solid fa-book"></i>  <h4>book</h4></Link></li>
            <li className="aside-li "><Link className="margin-l" to='/support'><i class="fa-solid fa-handshake"></i>  <h4>Help & Support</h4> </Link></li>

        </ul>
    
    </div>
}
export default Aside;