import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    className="col-sm"
  >
    <div
    >
      <h1 className="brand mt-5 mb-3">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
          className="brand"
        >
          codify
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
