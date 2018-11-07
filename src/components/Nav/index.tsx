import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import * as classnames from 'classnames'

const NavLink: React.SFC<{ to: string; title: string; text: string; }> =
  ({ to = '#', title = '', text = '' }) => (
    <Link className="link white dim f6 f5-l dib mr3 mr4-l" to={to} title={title}>{text}</Link>
  )

const Nav: React.SFC<React.HTMLProps<HTMLDivElement>> = ({ className }) => (
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
      <nav className={classnames('db dt-l w-100 pa3 ph5-l near-black transparent white absolute', className)} style={{ zIndex: 1000 }}>
        <Link className="db dtc-l v-mid link dim w-100 w-25-l tc tl-l mb2 mb0-l" to="/" title="Home">
          <h1 className="f3 mv0 white">{data.site.siteMetadata.title}</h1>
        </Link>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          {/* <NavLink to="/" title="Home" text="Home" /> */}
          {/* <NavLink to="/about" title="About" text="About" /> */}
        </div>
      </nav>
    )}
  />
)

export default Nav