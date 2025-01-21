import { PostListDetails } from '../lib/blog-api'
import Link from 'next/link'
import { getBlogLink } from '../lib/utils'
import React from "react";

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
        rounded-lg
        ring-2
        ring-sky-blue
        bg-gray-700
        border-dotted
        border-2
        border-gray-300
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

    </Link>)
  );
}

export default BlogHeroPreview
