import * as React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import styled from 'styled-components'

export interface Props {
  pages: Array<{
    href: string;
    isActive: boolean;
    title: string;
  }>;
}

const Item = styled.div`
  &.active {
    color: #590098;
  }
`

const Pagination: React.FC<Props> = ({
  pages,
}) => {
  return (
    <nav className="ph3 ph5-ns pv4">
      <div className="flex justify-center">
      {pages.map(({ href, isActive, title }, idx) => (
          <Item
            key={`pagination-item-${idx}`}
            className={classnames({ active: isActive })}
          >
            <Link
              className="link dim gray f5 f4-ns dib mr3"
              to={href}
              title={title}
            >{title}</Link>
          </Item>
        ))}
      </div>
    </nav>
  )
}

export default Pagination
