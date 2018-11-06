import * as React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import cover from '../../assets/imgs/cover.jpg'

console.log(cover)

const Wrapper = styled.div`
  padding-top: 4rem;
  background-color: #626973;
  background-image: url(${cover});
  background-size: cover;
  background-position: center;
`

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
      <Wrapper>
        <div className="mw9 center pa4 pv6-ns ph6-l">
          <h3 className="f-headline-l f1-m measure-narrow lh-title mv0">
            <span className="bg-black lh-copy white pa1 tracked-tight" dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.description }}></span>
          </h3>
          <h4 className="f5-ns fw1 white-40 mt4-l mt2 mb0 f5 white">#javascript #react #frontend #advanced_developer</h4>
        </div>
      </Wrapper>
    )}
  />
)