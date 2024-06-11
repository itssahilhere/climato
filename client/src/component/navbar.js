import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "@mui/material";
import { SidebarData } from "./sidebar";
//import "../css/navbar.css";
//import { IconContext } from "react-icons";
import {X} from 'phosphor-icons'

function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  //   console.log(sidebar, "Showsidebar");
  return (
   
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <List size={32}  onClick={showSidebar} />
        </Link>
          <Link to="/">

<h1 className="text-white font-mono flex-row flex text-3xl ml-96">Climato</h1>
          </Link>
          <div className="flex justify-between flex-row ml-96 mr-4 text-white text-xl">

      <Link to="/login " >
        <button className="ml-4 p-7 mr-0.5">LogIn</button>
        <button>Sign In</button>
      </Link>
          </div>
      
      {/* <p className="text-white flex flex-col">efrdfdrf</p> */}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
           
          </li>
        
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
         
        </ul>
        cdfddf
      </nav>
      </div>
    
  );
}

export default NavBar;
