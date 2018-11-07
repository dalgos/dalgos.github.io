import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import '../sass/index.scss'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={data.site.siteMetadata.meta}
        />
        <div className="w-100">

          <Nav/>
          
          <div>
            {children}
          </div>
        </div>
        <Footer title={data.site.siteMetadata.title}/>
      </div>
    )}
  />
)