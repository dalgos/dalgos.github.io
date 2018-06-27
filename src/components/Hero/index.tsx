import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => (
      <div className="sans-serif bb b--gray bg-off-green">
        <div className="mw9 center pa4 pv6-ns ph6-l">
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black lh-copy white pa1 tracked-tight" dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.description }}></span>
          </h3>
          <h4 className="f3 fw1 georgia i black">#javascript #react</h4>
        </div>
      </div>
    )}
  />
)