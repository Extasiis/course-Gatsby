import { Link } from 'gatsby'
import React, { useState } from 'react'

//Emotion
import styled from "@emotion/styled"

//Module CSS
import * as moduleComponentCSS from "./menu.module.css";

const NavLink = styled(Link)`
      padding: 10px;
      color: honeydew;
      text-decoration: inherit;
      diplay: flex;
      justify-self: center;
      background: ${props => props.active ? 'red' : ''}
`; 

const Nav = styled.nav`      
    display: grid;
    grid-template-columns: repeat(2, 1fr);    
    justify-content: space-evenly;
    justify-items: center
`

const Menu = () => {
  const [activo, setActivo] = useState('index')
  return (
    <>
      <header className={ moduleComponentCSS.menu }>
        <Nav>
          <NavLink to="/" onClick={ en => setActivo('index')} active={ activo === 'index'} >Inico</NavLink>
          <NavLink to="/abaut" onClick={ en => setActivo('about')} active={ activo === 'about'} >Abaut</NavLink>
        </Nav>
      </header>
    </>
  )
}

export default Menu
