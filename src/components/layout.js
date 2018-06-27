import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from '../components/Footer'
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
        <div className="fl w-100">

          <Header/>
          
          <div>
            {children}
          </div>
        </div>
        <Footer/>
      </div>
    )}
  />
)