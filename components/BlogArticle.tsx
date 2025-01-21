import { MetaData } from '../lib/blog-api'
import React from "react";

interface BlogProps {
  contents: string
  metaData: MetaData
}

const BlogArticle: React.FC<BlogProps> = ({ contents, metaData }) => {
  return (
    <div>
      <article
        className="
        mx-10 md:mx-20
      "
      >
        <h2
          className="
        text-4xl
        text-amber-200
        "
        >
          {metaData.title}
        </h2>

        <br />
        <br />

        <div
          dangerouslySetInnerHTML={{ __html: contents }}
          className="
          prose
          prose-lg
          font-serif
          "
        ></div>
        <p
          className="
          pt-10
          "
        >
          {metaData.publishedDate}{' '}
        </p>
      </article>
    </div>
  )
}

export default BlogArticle
