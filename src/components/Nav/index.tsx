import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import * as classnames from 'classnames'

import Logo from '../Logo'

export default ({ className, ...restProps }) => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <nav className={classnames('db dt-l w-100 border-box pa3 ph5-l near-black', className)}>
        <Link className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" to="/" title="Home">
          <h1 className="f3 mv0 black">{data.site.siteMetadata.title}</h1>
        </Link>
      </nav>
    )}
  />
)