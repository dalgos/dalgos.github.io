import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import '../sass/index.scss'

const Content = styled.div`
  margin: 0 auto;
`

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
      <div className="sans-serif page light">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={data.site.siteMetadata.meta}
        />
        <Nav/>
        <Content id="content" className="mw7 pv6-l pv5 ph5-l ph3">
          <div id="primary" className="w-100">
            {children}
          </div>
        </Content>
        <Footer title={data.site.siteMetadata.title}/>
      </div>
    )}
  />
)