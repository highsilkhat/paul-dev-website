import { MetaData } from '../lib/blog-api'
import Header from './Header'

interface BlogProps {
  contents: string
  metaData: MetaData
}

const Blog: React.VFC<BlogProps> = ({ contents, metaData }) => {
  return (
    <div>
      <Header />
      <p className="text-red-200">
        &quot;No man but a blockhead ever wrote, except for money.&quot; —
        Samuel Johnson
      </p>
      <article
        className="
        mx-10 md:mx-20
      font-serif
      "
      >
        <h1
          className="
        text-4xl
        font-sans
        "
        >
          {metaData.title}
        </h1>

        <div
          dangerouslySetInnerHTML={{ __html: contents }}
          className="
          prose
          prose-lg
          prose-green

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

export default Blog
