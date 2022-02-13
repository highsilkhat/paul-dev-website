import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import BlogHeroPreview from '../components/BlogHeroPreview'
import BlogLayout from '../components/BlogLayout'
import BlogPreview from '../components/BlogPreview'
import { getAllPosts, PostListDetails } from '../lib/blog-api'

export interface BlogProps {
  blogs: PostListDetails[]
}

const Blog: NextPage<BlogProps> = ({ blogs }) => {
  const [first, ...rest] = blogs
  return (
    <BlogLayout>
      <Head>
        <title>Paul Lee Blog</title>
      </Head>
      <BlogHeroPreview {...first} />
      {rest.length > 0 && (
        <div
          className="
          grid
          grid-cols1 md:grid-cols-2
          gap-4 md:gap-8
          mt-4 md:mt8
        "
        >
          {rest.map((post) => (
            <BlogPreview key={post.slug} {...post} />
          ))}
        </div>
      )}
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const blogs = await getAllPosts()
  return {
    props: {
      blogs,
    },
  }
}

export default Blog
