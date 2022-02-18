import { PostListDetails } from '../lib/blog-api'
import Link from 'next/link'
import { getBlogLink } from '../lib/utils'

const BlogHeroPreview: React.VFC<PostListDetails> = ({
  title,
  publishedDate,
  excerpt,
  slug,
}) => {
  return (
    <Link href={getBlogLink(slug)}>
      <a className="group">
        <div
          className="
          ring-4
          ring-opacity-50
          rounded-lg
          border-dotted
          border-4
          mt-4 md:mt:8
          p-4 md:p-8
          bg-black
          group-hover:text-gray-100
          group-hover:bg-blue-800
          group-hover:border-blue-800
          group-hover:ring-0
        "
        >
          <h2
            className="
          font-thin
            text-xl md:text-2xl
          "
          >
            {title}
          </h2>
          <h3
            className="
          text-base md:text-xl
          py-1 md:py-2
          "
          >
            {publishedDate}
          </h3>
          <p
            className="
          font-serif
          md:text-lg
          "
          >
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default BlogHeroPreview
