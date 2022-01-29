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
      <article
        className="
        mx-10 md:mx-20
      text-yellow-400
      font-serif
      text-opacity-95
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
          text-lg
          prose
          text-green-300
          text-opacity-95
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
