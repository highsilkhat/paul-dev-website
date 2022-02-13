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
          border-2
          mt-2 md:mt:4
          p-2 md:p-4
          bg-black
          group-hover:bg-gray-600
          group-hover:border-solid
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
