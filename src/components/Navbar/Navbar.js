import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
// import { Button } from '../../globalStyles';
// NavItemBtn,
// NavBtnLink
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon, 
  NavItem, 
  NavLinks,
  NavMenu
 } from './Navbar.elements';
 

const Navbar = () => {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    // if(window.innerWidth <= 960) {
    //   setButton(false);
    // } else {
    //   setButton(true);
    // }
  };

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

    return(
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    PEAKPRIME
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                  <NavItem>
                    <NavLinks to='/' onClick={closeMobileMenu}>
                      Home
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/about' onClick={closeMobileMenu}>
                      About
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/services' onClick={closeMobileMenu}>
                      Services
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/contact' onClick={closeMobileMenu}>
                      Contact Us
                    </NavLinks>
                  </NavItem>
                  {/* <NavItemBtn>
                    {button ? (
                      <NavBtnLink to='/sign-up'>
                        <Button primary>SIGN UP</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to='/sign-up'>
                        <Button onClick={closeMobileMenu} fontBig primary>
                          SIGN UP
                        </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn> */}
                </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
        </>
    );
}

export default Navbar