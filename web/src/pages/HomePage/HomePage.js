import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import BlogPostCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <BlogLayout>
        <h1>HomePage</h1>  
        <BlogPostCell></BlogPostCell>


      </BlogLayout>

      </>
   
  )
}

export default HomePage
