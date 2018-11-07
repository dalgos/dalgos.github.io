import * as React from 'react'
import Link from 'gatsby-link'


const ProfileHero: React.SFC<{ title: string; excerpt: string; path: string; }> = ({ title, excerpt, path }) => (
  <header className="cover bg-left bg-center-l profile-hero-cover">
    <div className="bg-black-80 pt5 pb5 pb6-m">
      <div className="center pa4 pt5-ns ph7-l" style={{ maxWidth: '80rem' }}>
        <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">{title}</h3>
        <p className="f5 f4-l lh-copy measure">{excerpt}</p>
        <Link className="f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-gray" to={path} title="Read more">Read more</Link>
      </div>
    </div>
  </header>
)

export default ProfileHero