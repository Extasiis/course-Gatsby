import React from "react"
import Layout from './src/component/layout'
import './src/styles/global.css'

//Componentes percistentes con gastby-ssr.js

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
  }