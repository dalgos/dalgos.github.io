import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
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
          title="const review"
          meta={[
            { name: 'description', content: 'dalgos blog' },
            { name: 'keywords', content: 'frontend, javascript' },
          ]}
        />
        <div className="fl w-100">
          <div>
            {children}
          </div>
        </div>
        <Footer/>
      </div>
    )}
  />
)