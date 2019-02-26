import * as React from 'react'

const EntryHeader = ({ title }) => (
  <header>
    <h1 className="f2-l f2 lh-title mv0 w-80" style={{ letterSpacing: '-0.05rem' }}>{title}</h1>
    <hr className="mv5-l mv4"/>
  </header>
)

export default EntryHeader
