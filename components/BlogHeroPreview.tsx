import { PostListDetails } from '../lib/blog-api'
import Link from 'next/link'
import { getBlogLink } from '../lib/utils'

const BlogHeroPreview: React.FC<PostListDetails> = ({
  title,
  publishedDate,
  excerpt,
  slug,
}) => {
  return (
    (<Link href={getBlogLink(slug)} className="group">

      <div
        className="
        rounded-xl
        ring-4
        ring-sky-blue
        bg-gray-700
        border-dotted
        border-2
        border-gray-300
        bg-opacity-50
        mt-4 md:mt:8
        p-4 md:p-8
        group-hover:text-gray-100
        group-hover:bg-ferry-green
        group-hover:border-ferry-green
        group-hover:ring-gray-300
        group-hover:ring-2
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

    </Link>)
  );
}

export default BlogHeroPreview
