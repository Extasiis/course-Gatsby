import React from "react"
import Layout from './src/component/layout'

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
  }