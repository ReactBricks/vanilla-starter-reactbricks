import React, { useState, useContext, useEffect } from 'react'
import {
  PageViewer,
  fetchPage,
  cleanPage,
  ReactBricksContext,
} from 'react-bricks'

const ViewerFetch = () => {
  const PAGE_SLUG = 'home'
  const [page, setPage] = useState(null)
  const { apiKey, blockTypeSchema, pageTypeSchema } = useContext(
    ReactBricksContext
  )

  useEffect(() => {
    fetchPage(PAGE_SLUG, apiKey).then(data => {
      const myPage = cleanPage(data, pageTypeSchema, blockTypeSchema)
      setPage(myPage)
    })
  }, [apiKey, pageTypeSchema, blockTypeSchema])

  if (page) {
    return <PageViewer page={page} />
  }
  return null
}

export default ViewerFetch
