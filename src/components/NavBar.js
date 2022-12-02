import logo from "./images/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import Ticker from 'react-ticker';




const NavBar = () => {


  return (
    <div className="">
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light " >
        <img src={logo} alt="log" className="logoSize"/>
        <a className="navbar-brand navbarColor navbarPosition" >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Ticker>
        {({ index }) => (
            <>
                <h1>MAke YOUR VIH Diagnostic !</h1>
                
            </>
        )}
    </Ticker>
        </a>
        <a className="navbar-brand navbarColor" href="https://638991ddc792c331a4326321--stirring-chaja-2c9977.netlify.app/" target="_blank">Click here to see puzzle game</a>
       
        
        
      </nav>
    </div>
  );
};
export default NavBar;
