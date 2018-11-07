import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 4rem;
  background-color: #fe4141;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    background-image: url(${({ cover }) => cover});
    z-index: 1;
    opacity: .5;
  }
`

export interface HeroPostProps {
  cover: string;
  excerpt: string;
  path: string;
  title: string;
}

const HeroPost: React.SFC<HeroPostProps> = ({ title, excerpt, cover, path }) => (
  <Wrapper className="w-100" cover={cover}>
    <div className="mw9 center pv6-ns ph6-l relative z-999">
      <h3 className="f1-l f1-m measure-narrow">
        <span className="lh-copy text-mud pa1 tracked-tight">{title}</span>
      </h3>
      <h4 className="f5-ns fw1 white-40 mt4-l mt2 mb0 f5 white">{excerpt}</h4>
      <a className="f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-gray" href={path}>Read more</a>
    </div>
  </Wrapper>
)

export default HeroPost