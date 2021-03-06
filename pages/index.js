import { Fragment } from 'react'
import Head from 'next/head'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Si zone</title>
        <meta name="description" content="All things Blockchain, programming" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps(props) {
  return {
    props: {
      posts: getFeaturedPosts(),
    },
  }
}

export default HomePage
