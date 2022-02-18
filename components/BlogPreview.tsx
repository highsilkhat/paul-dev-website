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
          ring-2
          ring-opacity-50
          rounded-lg
          border-dotted
          border-2
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
            text-base md:text-lg
          "
          >
            {title}
          </h2>
          <h3
            className="
          text-sm md:text-md
          py-1 md:py-2
          "
          >
            {publishedDate}
          </h3>
          <p
            className="
          font-serif
          text-sm md:text-md
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
