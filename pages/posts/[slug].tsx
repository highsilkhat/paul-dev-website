import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Blog from '../../components/Blog'
import { getAllPosts, getPostContent, PostContent } from '../../lib/blog-api'

interface PostParams extends ParsedUrlQuery {
  slug: string
}

interface PostProps {
  postContent: PostContent
}

const Post: React.VFC<PostProps> = ({ postContent }) => {
  return (
    <div
      className="
      w-full
      h-screen
      relative
      bg-black
      overflow-y-auto

    "
    >
      <Blog
        contents={postContent.htmlContent}
        metaData={postContent.metaData}
      />
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const posts = await getAllPosts()

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post,
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
