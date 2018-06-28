import React from 'react'
import Link from 'gatsby-link'
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
  // <Container className="card">
  //   <img className="card-img-top" src={coverImage} />
  //   <div className="card-body">
  //     <h5 className="card-title">
  //       <strong>
  //         <Link to={path}>{title}</Link>
  //       </strong>
  //     </h5>
  //     <p className="card-text">{excerpt}</p>
  //     <p className="card-text">
  //       <small className="text-muted">{date}</small>
  //     </p>
  //   </div>
  // </Container>
  <article className="pa3 pa5-ns">
    <h1 className="f3 f1-m f-headline-l">{title}</h1>
    <p className="measure lh-copy">
      {excerpt}
    </p>
    <div>{date}</div>
  </article>
);