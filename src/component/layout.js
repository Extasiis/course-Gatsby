import React from 'react'
import Menu from './menu/menu'

//Style Component
import style from 'styled-components' 

const Footer = style.footer`
    color: white;
    background: black;
    padding: 2rem;
    text-position: center;
`

const Layout = (props) => {
  return (
    <>
      <div className={props.className}>
      <Menu />
      {props.children}
      <Footer>
          Soy el pie de pagina
      </Footer>
      </div>
    </>
  )
}

export default style(Layout)`
    color: ${ props => props.color || 'black' }
`