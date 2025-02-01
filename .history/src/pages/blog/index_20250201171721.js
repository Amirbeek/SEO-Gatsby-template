import React from "react";
import Layout from "../../Layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Grid, Typography } from '@mui/material';
import * as styles from '../../styles/blog.module.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Posts from '../../components/Posts';

export default function Projects({ data }) {
    const projects = data.project.nodes;
    const Image = data.myImage.childImageSharp.fluid;

    return (
        <Layout>
            <div className={styles.portfolio}>
                <Grid container spacing={2} justifyContent="center" className="mt">
                    <Grid item xs={12} sm={6} md={4}>
                        <Img fluid={Image} alt="Image Description" className={styles.imgStyle}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h5" gutterBottom fontWeight="bold">
                            Amirbek Shomurodov | Personal Blog
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "1.10rem" }} paragraph>
                            Welcome to my personal blog. Here I share my stories and ideas with the world. I am very passionate about programming and design. Currently, I am a Computer Science student at Brunel University London.
                        </Typography>
                        <Link to="/contact" className={styles.Button}>  
                            Get in touch <ArrowForwardIcon className={styles.icon}/>
                        </Link>
                    </Grid>
                </Grid>
                
                <Typography variant="h4" gutterBottom sx={{ mt: 4, display: 'flex', alignItems: 'center' }} className="text-nl">
                    Blog Posts <ArrowDownwardIcon sx={{ fontSize: '2.1rem', marginLeft: '.5rem' }} />
                </Typography>
                
                <Grid container spacing={2} className="mt">
                    {projects.map(project => (
                        <Grid item xs={12} sm={6} md={4} key={project.id}>
                            <Posts 
                                img={project.frontmatter.thumb.childImageSharp.fluid}
                                url={'/blog/' + project.frontmatter.slug}
                                date={project.frontmatter.date}
                                title={project.frontmatter.title}
                                type={project.frontmatter.stack}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout>
    );
}

export const query = graphql`
query MyProjectsQuery {
 myImage: file(relativePath: {eq: "hello.jpeg"}) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
  project: allMarkdownRemark(sort: {timeToRead: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        date
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`