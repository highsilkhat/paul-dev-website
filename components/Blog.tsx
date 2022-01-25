import { MetaData } from '../lib/blog-api'

interface BlogProps {
  contents: string
  metaData: MetaData
}

const Blog: React.VFC<BlogProps> = ({ contents, metaData }) => {
  return (
    <article>
      <h1
        className="
      text-4xl"
      >
        {metaData.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: contents }}
        className="
        prose
        "
      ></div>

      <p>{metaData.publishedDate} </p>
    </article>
  )
}

export default Blog
