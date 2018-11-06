import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Logo from '../Logo'

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site }) => (
      <div
        className="pa4-l pa3 bg-off-green transparent absolute w-100"
        style={{ zIndex: 1000 }}
      >
        <Link
          to="/"
          className="no-underline dib white"
        >
          <h1
            className="f4 f4-l mv0"
          >
            {/*<Logo
              size="26px"
              className="v-mid mr2"
            />*/}
            {site.siteMetadata.title}
          </h1>
        </Link>
      </div>
    )}
  />
)