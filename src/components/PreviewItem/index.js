import React from 'react'
import Link from 'gatsby-link'
import Styled from 'styled-components'

const Container = Styled.div`
  h1 {
    font-size: 2rem;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  h2 {
    font-size: 1rem;
  }
  p {
    
  }
`

export default ({ path, title, date, excerpt }) =>
  <Container>
    <h1>
      <Link to={path}>{title}</Link>
    </h1>
    <h2>{date}</h2>
    <p>{excerpt}</p>
  </Container>