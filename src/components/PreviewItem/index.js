import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  a {
    color: initial;
    font-weight: initial;
    &:hover {
      text-decoration:none;
    }
  }
  h5 {
    font-weight: bolder;
  }
`

export default ({ path, title, date, excerpt, coverImage }) => (
  <article className="pa3 pa5-ns">
    <h1 className="f3 f1-m f-headline-l">{title}</h1>
    <p className="measure lh-copy">
      {excerpt}
    </p>
    <div>{date}</div>
  </article>
);