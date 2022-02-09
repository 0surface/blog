import { Fragment } from 'react'
import Head from 'next/head'

import styles from './not-found-page.module.css'
import Link from 'next/link'

function NotFoundPage(props) {
  const { src, alt } = props
  return (
    <Fragment>
      <Head>
        <title>Oops!</title>
        <meta name="description" content="Not found page" />
      </Head>

      <p className={styles.bgText}>
        Oops!
        <br />
        404 Not Found
        <br />
        <Link href="/">
          <a>Go back</a>
        </Link>
      </p>
    </Fragment>
  )
}

export default NotFoundPage
