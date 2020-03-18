import React from 'react'
import { ReactBricks } from 'react-bricks'
import { Router, Link } from '@reach/router'
import config from './react-bricks/config'
import Login from './admin/Login'
import Editor from './admin/Editor'
import Playground from './admin/Playground'
import AppSettings from './admin/AppSettings'
import Viewer from './Viewer'
import ViewerFetch from './ViewerFetch'

function App() {
  return (
    <div className="App">
      <header
        style={{ maxWidth: 640, margin: '10px auto', textAlign: 'center' }}
      >
        <Link to="/login">Admin dashboard</Link> |{' '}
        <Link to="/">Viewer (usePage hook)</Link> |{' '}
        <Link to="/viewer-fetch">Viewer (fetchPage)</Link>
      </header>
      <ReactBricks {...config}>
        <Router>
          <Login path="/login" />

          <Editor path="/editor" />
          <Playground path="/playground" />
          <AppSettings path="/app-settings" />

          <Viewer path="/" />
          <ViewerFetch path="/viewer-fetch" />
        </Router>
      </ReactBricks>
    </div>
  )
}

export default App
