import * as React from 'react'

export interface ArticleHeaderProps {
  title: string;
  date?: string;
}

export default ({ title = '', date }: ArticleHeaderProps) => (
  <header className="sans-serif">
    <div className="mw9 center pa4 pa5-ns pb6-ns ph6-l bb b--gray">
      {date && <time className="f6 mb2 dib ttu tracked"><small>{date}</small></time>}
      <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
        <span className="pa1 tracked-tight">
          {title}
        </span>
      </h3>
      {/*<h4 className="f3 fw1 georgia i">The definitive guide to the javascript tooling landscape in 2015.</h4>
      <h5 className="f6 ttu tracked black-80">By dalgos</h5>*/}
    </div>
  </header>
)