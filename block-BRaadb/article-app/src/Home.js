import React from "react";
import {Link} from 'react-router-dom';
import './style/home.css'
function Home(){
    return<>
    <div>   <h3>🚀Welcome To HomePage!</h3>
    <ul className="margin-l">
        <li><Link to='/article'> <h4>ARTICLE PAGE</h4></Link></li>
        <li><Link to='/book'> <h4>BOOK PAGE</h4></Link></li>
        <li><Link to='/people'> <h4>PEOPLE PAGE</h4></Link></li>

    </ul>
    </div>
 
    </>
}
export default Home;