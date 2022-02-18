import { MetaData } from '../lib/blog-api'

interface BlogProps {
  contents: string
  metaData: MetaData
}

const BlogArticle: React.VFC<BlogProps> = ({ contents, metaData }) => {
  return (
    <div>
      <article
        className="
        mx-10 md:mx-20
      "
      >
        <h1
          className="
        text-4xl
        "
        >
          {metaData.title}
        </h1>

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
