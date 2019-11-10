import React from "react";
import logo from "../../assets/moon-logo.png"
import crown from "../../assets/crown.png"

const Header = () => (
    <header className="page-header">
        <div className="app-name">
            <h1><img id="logo" src={ logo } alt="cat-round"></img>Neko</h1>
            <p>Meow-jestic Facts<img className="crown" src={crown} alt="crown-logo"></img></p>
        </div>  
    </header>
);

export default Header;