import React from "react";
import logo from "../../assets/neko-app-bg.jpg"
import crown from "../../assets/crown.png"


const Header = () => (
    <header className="page-header">
        <img id="logo" src={ logo } alt="cat-round"></img>
        <div className="app-name">
            <h1>Neko</h1>
            <p>Meow-jestic Facts<img className="crown" src={crown} alt="crown-logo"></img></p>
        </div>  
    </header>
);

export default Header;