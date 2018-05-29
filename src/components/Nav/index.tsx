import * as React from 'react'
import Link from 'gatsby-link'
import * as classnames from 'classnames'

export default ({ className, ...restProps }) =>
  <nav className={classnames('db dt-l w-100 border-box pa3 ph5-l near-black', className)}>
    <Link className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" to="/" title="Home">
      <h1 className="f3 mv0">devs</h1>
    </Link>
    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <a className="link near-black hover-silver dib h2 w2 mr3" href="https://github.com/dalgos" title="GitHub">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
      </a>
      {/* <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="#" title="How it Works">How it Works</Link>
      <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="#" title="Blog">Blog</Link>
      <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="#" title="Press">Press</Link>
      <Link className="link dim dark-gray f6 f5-l dib" to="#" title="Contact">Contact</Link> */}
    </div>
  </nav>