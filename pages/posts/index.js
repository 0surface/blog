import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react framework for Production - it makes building fullstack React apps and sites a breeze and ships iwth built in server side rendering',
    date: '2022-02-09',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react framework for Production - it makes building fullstack React apps and sites a breeze and ships iwth built in server side rendering',
    date: '2022-02-09',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react framework for Production - it makes building fullstack React apps and sites a breeze and ships iwth built in server side rendering',
    date: '2022-03-09',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react framework for Production - it makes building fullstack React apps and sites a breeze and ships iwth built in server side rendering',
    date: '2022-02-05',
  },
]

function AllPostsPage(props) {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
