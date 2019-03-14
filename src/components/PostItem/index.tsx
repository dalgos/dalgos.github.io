import * as React from 'react'
import Link from 'gatsby-link'
import Styled from 'styled-components'
import Img from 'gatsby-image'

export default ({ path, title, date, excerpt }) => (
  <article>
    <h2>
      <Link
        to={path}
        className="f4 fw4 black"
      >
        {title}
      </Link>
    </h2>
    {/* <p className="lh-copy" dangerouslySetInnerHTML={{ __html: excerpt }}>
      
    </p>
    <div className="dib off-orange">
      <Link to={path} className="no-underline b off-orange">more</Link>
    </div>
    <div className="mt2 gray">{date}</div> */}
  </article>
)