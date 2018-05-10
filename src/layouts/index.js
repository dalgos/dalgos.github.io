import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../sass/index.scss'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="createweb.app"
      meta={[
        { name: 'description', content: 'oror.io blog' },
        { name: 'keywords', content: 'frontend, javascript' },
      ]}
    />
    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6 mx-auto">
      <div className="row">
        <Header />
      </div>
      <div
        className="row"
      >
        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
