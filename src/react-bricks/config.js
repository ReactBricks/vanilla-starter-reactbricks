import React from 'react'
import { Link, navigate } from '@reach/router'
import pageTypeSchema from './pageTypeSchema'
import blockTypeSchema from './bricks'

const config = {
  appId: '2c45e3ec-6e8e-4445-8c5d-63cecacfc2ba',
  apiKey: '55fb8b1a-25ea-4733-a6af-19bc55cb919c',
  pageTypeSchema,
  blockTypeSchema,
  //logo,
  //contentClassName: 'content',
  renderLocalLink: ({ href, children, className, activeClassName }) => {
    const isActive = ({ isCurrent }) => {
      return isCurrent ? { className: activeClassName } : {}
    }

    return (
      <Link to={href} className={className} getProps={isActive}>
        {children}
      </Link>
    )
  },
  navigate,
  loginPath: '/login',
  editorPath: '/editor',
  playgroundPath: '/playground',
  appSettingsPath: '/app-settings'
}

export default config
