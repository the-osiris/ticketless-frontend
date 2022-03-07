import { React, useState } from 'react';
import classes from './Navbar.module.css';
import { MenuItems } from '../MenuItems/MenuItems';
import logo from '../../assets/logo.svg';
import Button from '../Button/Button'

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  function clickHandler() {
    setClicked(!clicked);
  }

  

  return (
    <nav className={classes.NavbarItems}>
      <img className={classes.navbarLogo} src={logo} alt="logo" />
      <div className={classes.menuIcon} onClick={clickHandler}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? `${classes.navMenu} active` : classes.navMenu}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={classes.navLinks} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
};

export default Navbar;
