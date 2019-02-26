import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import * as classnames from 'classnames'

const NavLink: React.SFC<{ to: string; title: string; text: string; className?: string }> =
  ({ className = '', to = '#', title = '', text = '' }) => (
    <Link className={classnames('link white dim f6 f5-l dib-l db mr4-l pv1-l pv3 bb bn-l b--light-gray', className)} to={to} title={title}>{text}</Link>
  )

const { useEffect, useCallback, useState } = React

const Nav: React.SFC<React.HTMLProps<HTMLDivElement>> = ({ className }) => {

  const { 0: isUnpinned, 1: isUnpinnedUpdater } = useState(false)
  const { 0: isMenuToggled, 1: isMenuToggledUpdater } = useState(false)
  const { 0: screenYs, 1: updateScreenYs } = useState({ start: 0, end: 0 })

  const scrollHandler = useCallback((evt) => {
    isUnpinnedUpdater(evt.deltaY > 0 ? window.scrollY > 0 : false)
  }, [])

  const menuClickHandler = useCallback(() => {
    isMenuToggledUpdater((isMenuToggled) => !isMenuToggled)
  }, [])

  const touchStartHandler = useCallback((evt) => {
    updateScreenYs((screenYs) => ({
      ...screenYs,
      start: evt.changedTouches[0].screenY,
    }))
  }, [])

  const touchEndHandler = useCallback((evt) => {
    const endScreenY = evt.changedTouches[0].screenY
    updateScreenYs((screenYs) => {
      console.log(screenYs.start, endScreenY)
      isUnpinnedUpdater(screenYs.start > endScreenY ? window.scrollY > 0 : false)
      return {
        ...screenYs,
        end: evt.changedTouches[0].screenY,
      }
    })
  }, [])

  // nav transition
  useEffect(() => {
    window.addEventListener('wheel', scrollHandler)
    window.addEventListener('touchstart', touchStartHandler)
    window.addEventListener('touchend', touchEndHandler)
    return () => {
      window.removeEventListener('wheel', scrollHandler)
      window.removeEventListener('touchstart', touchStartHandler)
      window.removeEventListener('touchend', touchEndHandler)
    }
  }, [])

  return (
    <StaticQuery
      query={graphql`
        query NavQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <nav className={classnames('db dt-l w-100 pa3 ph5-l fixed top-0 nav bg-white', className, { unpinned: isUnpinned })} style={{ zIndex: 1000 }}>
            <div className={classnames('w-100 w-10-l mb0-l dib-l', { 'mb3': isMenuToggled })}>
              <h1 className="f4 f3-ns mv0 dib fw1 w-10-l w-50">
                <Link className="db dtc-l v-mid link dim w-100 w-10-l tl-l" to="/" title="Home">
                  {data.site.siteMetadata.title}
                </Link>
              </h1>
              <div className="w-50 dib tr dn-l">
                <a
                  href="javascript: void(0);"
                  className={classnames('ball v-mid', { active: isMenuToggled })}
                  onClick={menuClickHandler}
                />
              </div>
            </div>
            <nav className={classnames('w-90-l w-100 dib-l db-l dn bt bn-l b--light-gray bg-white', { 'db': isMenuToggled })}>
              <ul className="list db dtc-l fw1 ttl v-mid ma0 pa0">
                {/* <NavLink to="/" title="Home" text="Home" /> */}
                <li className="dib-l tl-l db tc">
                  <NavLink to="/about" title="About" text="About" />
                </li>
              </ul>
            </nav>
          </nav>
        )
      }}
    />
  )
}

export default Nav