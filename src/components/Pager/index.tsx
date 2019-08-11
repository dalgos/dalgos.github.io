import * as React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'

interface Node {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    data: string;
    path: string;
    title: string;
  };
  html: string;
  id: string;
}

interface Props {
  next?: Node;
  previous?: Node;
}

const ItemContainer: React.FC<{
  className?: string;
  children: JSX.Element;
  hoverable?: boolean;
}> = ({
  className,
  hoverable = false,
  children, 
}) => {
  return (
    <div className={classnames(
      "dtc w-100 w-50-ns bg-white tc",
      className,
      {
        'hover-bg-light-gray': hoverable,
      }
    )}>
      {children}
    </div>
  )
}

const Item: React.FC<{ title: string; context: string; to?: string; }> = ({
  title,
  context,
  to,
}) => {
  return (
    <Link to={to} className="ph4 db pv1">
      <div className="dt w-100 mt1">
        <div className="dtc">
          <h1 className="f5 f4-ns mtl">
            {title}
          </h1>
        </div>
      </div>
      <p className="f6 lh-copy measure mt2 mid-gray">
        {context}
      </p>
    </Link>
  )
}

const Pager: React.FC<Props> = ({
  next,
  previous,
}) => {
  return (
    <article className="cf dt w-100">
      <ItemContainer
        className="tl-ns"
        hoverable={!!next}
      >
        {next &&
        <Item
          to={next.frontmatter.path}
          title="Prev"
          context={next.frontmatter.title}
        />}
      </ItemContainer>
      
      <ItemContainer
        className="tr-ns"
        hoverable={!!previous}
      >
        {previous &&
        <Item
          to={previous.frontmatter.path}
          title="Next"
          context={previous.frontmatter.title}
        />}
      </ItemContainer>

    </article>
  )
}

export default Pager
