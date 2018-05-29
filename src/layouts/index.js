import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../sass/index.scss'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="const review"
      meta={[
        { name: 'description', content: 'dalgos blog' },
        { name: 'keywords', content: 'frontend, javascript' },
      ]}
    />
    <div className="fl w-100">
      <div>
        {children()}
      </div>
    </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
