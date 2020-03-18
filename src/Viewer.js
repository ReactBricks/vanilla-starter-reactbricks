import React, { useContext } from 'react'
import {
  PageViewer,
  usePage,
  cleanPage,
  ReactBricksContext
} from 'react-bricks'

const Viewer = () => {
  const PAGE_SLUG = 'home'

  const { data } = usePage(PAGE_SLUG)
  const { pageTypeSchema, blockTypeSchema } = useContext(ReactBricksContext)

  // Clean the received content
  // Removes unknown or not allowed bricks
  const page = cleanPage(data, pageTypeSchema, blockTypeSchema)

  return <PageViewer page={page} />
}

export default Viewer
