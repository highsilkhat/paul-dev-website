import Header from './Header'

const BlogLayout: React.FC = ({ children }) => {
  return (
    <div
      className="
    text-yellow-200
    "
    >
      <Header />
      <div
        className="
      pl-4 md:pl-16
      pr-24 md:pr-48
      "
      >
        <p
          className="text-ferry-green
        font-serif"
        >
          &quot;No man but a blockhead ever wrote, except for money.&quot; —
          Samuel Johnson
        </p>
        {children}
      </div>
    </div>
  )
}

export default BlogLayout
