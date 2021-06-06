import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Template = (props) => {
    const image = getImage(props.data.file.childImageSharp.gatsbyImageData)
  return (
    <div >
      <h1>{props.pageContext.relativePath}</h1>
      <GatsbyImage image={image} alt={image} />
    </div>
  )
}

export const query = graphql`
    query($relativePath: String){
        file(relativePath: {eq: $relativePath}) {
            childImageSharp {
                gatsbyImageData(width: 400, height: 600, layout: FIXED)
            }
          }
        }
`

export default Template
