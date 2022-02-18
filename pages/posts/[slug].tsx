import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import BlogArticle from '../../components/BlogArticle'
import BlogLayout from '../../components/BlogLayout'
import { getAllPosts, getPostContent, PostContent } from '../../lib/blog-api'

interface PostParams extends ParsedUrlQuery {
  slug: string
}

interface PostProps {
  postContent: PostContent
}

const Post: NextPage<PostProps> = ({ postContent }) => {
  return (
    <BlogLayout>
      <Head>
        <title> {postContent.metaData.title} - Paul Lee </title>
      </Head>
      <div
        className="
              mt-10
              py-10
            bg-gray-800
              bg-opacity-50
              rounded-2xl
              "
      >
        <BlogArticle
          contents={postContent.htmlContent}
          metaData={postContent.metaData}
        />
      </div>
    </BlogLayout>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const posts = await getAllPosts()

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({
  params,
}) => {
  const slug = params?.slug
  if (!slug) {
    return {
      notFound: true,
    }
  }
  const postContent = await getPostContent(slug)

  return { props: { postContent } }
}
