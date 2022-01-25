interface BlogProps {
  contents: string
}

const Blog: React.VFC<BlogProps> = ({ contents }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: contents }}
      className="
  prose
  "
    ></div>
  )
}

export default Blog
