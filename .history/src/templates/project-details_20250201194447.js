import React from "react"
import Img from "gatsby-image"
import {featured, details, html_} from '../styles/project-details.module.css'
import Layout from "../Layout";
import {graphql} from "gatsby";
import {Grid ,Typography} from '@mui/material';

const ProjectDetails = ({data}) => {
    const {html} = data.markdownRemark;
    const {title, stack, featuredImg} = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={details}>
                <Typography variant="h3" gutterBottom fontWeight="bold">{title}</Typography>
                <Typography variant="body3">{stack}</Typography>
                <div className={featured}>
                     <Img fluid={featuredImg.childImageSharp.fluid} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} className={`${html_} text-nl`} />
            </div>
        </Layout>
    )
}

export default ProjectDetails

export const pageQuery = graphql`
    query MyProjectsQuery($slug: String) {
      markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
          title
          stack
          featuredImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
`