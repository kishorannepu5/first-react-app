import { useState } from "react";

const Header = () => {

    const [btnName,setBtnName] = useState('LogIn');
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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