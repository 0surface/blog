import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import NotFoundPage from '../components/ui/not-found-page'

function NotFound() {
  return <NotFoundPage src="/images/site/broken.png" alt="404 page" />
}

export default NotFound
