import * as React from 'react'
import styled from 'styled-components'

export interface ArticleHeaderProps {
  fluid?: { src: string };
  title: string;
  subTitle?: string;
  date?: string;
}

const Wrapper = styled.header`
  position: relative;
  padding-top: 4rem;
  z-index: 1;
  div:first-child {
    z-index: 2;
    position: relative;
  }
  ${props => props.dataURI ? `
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    background-image: url(${props.dataURI});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    opacity: .5;
    z-index: 1;
  }
  ` : 'background-color: black;'}
`

export default ({ title = '', subTitle, date, fluid }: ArticleHeaderProps) => (
  <Wrapper dataURI={fluid.src}>
    <div className="mw9 center pa4 pa6-ns b--gray">
      {date && <time className="f6 mb2 dib ttu tracked"><small>{date}</small></time>}
      <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
        <span className="pa1 tracked-tight">
          {title}
        </span>
      </h3>
      {subTitle && <h4 className="f5 fw1">{subTitle}</h4>}
      {/*<h5 className="f6 ttu tracked black-80">By dalgos</h5>*/}
    </div>
  </Wrapper>
)