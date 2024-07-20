import { useState } from "react";
import {Link} from 'react-router-dom';
const Header = () => {
    const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

    const [btnName,setBtnName] = useState('LogIn');
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
               <Link to='/contact'>Contact Us</Link>
             </li>
             <li>Cart</li>
            <button onClick={
                () =>{
                    btnName === 'LogIn' ? setBtnName('LogOut') : setBtnName('LogIn')
                }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  

  export default Header;