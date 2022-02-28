import Header from './Header'

const BlogLayout: React.FC = ({ children }) => {
  return (
    <div
      className="
    
    "
    >
      <Header />
      <div
        className="
      pl-4 md:pl-16
      pr-4 md:pr-48
      pb-20
      "
      >
        <p
          className="text-white
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
