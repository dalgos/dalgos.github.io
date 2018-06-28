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
      <div className="bg-gray sans-serif bb b--gray">
        <div className="mw9 center pa4 pt7-ns pb6-ns ph6-l">
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-mid-gray lh-copy white pa1 tracked-tight" dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.description }}></span>
          </h3>
          <h4 className="f3-ns fw1 georgia i white-40 mt4-l mt2 mb0 f5">#javascript #react</h4>
        </div>
      </div>
    )}
  />
)