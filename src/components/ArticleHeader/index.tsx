import * as React from 'react'

export interface ArticleHeaderProps {
  title: string;
  subTitle?: string;
  date?: string;
}

export default ({ title = '', subTitle = 'The Developer\'s Guide to the IDE', date }: ArticleHeaderProps) => (
  <header className="sans-serif bg-off-green">
    <div className="mw9 center pa4 pa6-ns bb b--gray">
      {date && <time className="f6 mb2 dib ttu tracked"><small>{date}</small></time>}
      <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
        <span className="pa1 tracked-tight">
          {title}
        </span>
      </h3>
      {subTitle && <h4 className="f5 fw1 georgia i">{subTitle}</h4>}
      {/*<h5 className="f6 ttu tracked black-80">By dalgos</h5>*/}
    </div>
  </header>
)