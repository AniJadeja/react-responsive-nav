//import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavEntry from "./NavEntry/NavEntry";

//import { BurgerClose }
  //from "react-burger-icons";
import './NavStyle.css';
import './NavButtonAnimation.css'

const NavigationBar = ({ navEntries }) => {

 // const projectName = "Portfolio";

 // const [isClosed, setIsClosed] = useState(false);
  const closeMobileMenu = () => {}//setIsClosed(false);

  return (
    <section id="middleNavigationBar">
      <nav id="desktopNavigation" className="navElement">
          <Link to="/" onClick={
            closeMobileMenu}>
            <img alt="App Logo" />
          </Link>
          <ul >
            {navEntries.map((entry) => {
              console.log(entry);
              return (
                <NavEntry
                  path={entry.path}
                  page={entry.name}
                />
              );
            })}
          </ul>
      </nav>





      {/*   <nav id="mobileNavigation" className=" mx-8 flex lg:hidden  justify-center">
       // {/*Menu Control Button

      <div className="fixed right-0 bottom-11 h-12 w-12 bg-[var(--color-menu-gray)] rounded-s-xl z-20 mobile-nav-button">
        <div className="flex justify-center items-center h-full" onClick={() => {
          setIsClosed(!isClosed)
        }}>
          <BurgerClose isClosed={isClosed} />
        </div>
      </div>

      {/*Bottom Navigation Menu

      <div className={"nav-header align-mobile bg-[var(--color-menu-gray)] rounded-s-full z-10 transition-transform transform shadow-sm shadow-[var(--color-primary-accent)] md:-mr-16 " + (!isClosed ? "translate-x-full" : "translate-x-10")
        /* The translate property moves the navbar from offscreen to onscreen and again to offscreen. 

      }>

        <ul className="flex first:ml-4 last:mr-20 overflow-x-auto"
          onClick={closeMobileMenu}>
          <li className="nav-item-mobile align-center">
            <NavLink
              to="/"
              className={({ isActive }) => {

                return isActive ? "activated" : "";
              }}

            >Home</NavLink>
          </li>
          <li className="nav-item-mobile align-center">
            <NavLink
              to="/aboutme"
              className={({ isActive }) => {

                return isActive ? "activated" : "";
              }}
            >About Me</NavLink>
          </li>
          <li className="nav-item-mobile align-center">
            <NavLink
              to="/Projects"
              className={({ isActive }) => {

                return isActive ? "activated" : "";
              }}

            >Projects</NavLink>
          </li>
          <li className="nav-item-mobile align-center">
            <NavLink
              to="/avocations"
              className={({ isActive }) => {

                return isActive ? "activated" : "";
              }}

            >Avocations</NavLink>
          </li>
          <li className="nav-item-mobile align-center">
            <NavLink
              to="/Contact"
              className={({ isActive }) => {

                return isActive ? "activated" : "";
              }}
            >Contact</NavLink>
          </li>
        </ul>
      </div>

    </nav> */}


    </section >
  );
};

export default NavigationBar;
