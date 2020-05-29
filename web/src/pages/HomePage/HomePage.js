import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'


const HomePage = () => {
  return (
    <>
      <BlogLayout>
        <h1>HomePage</h1>  

        
          <BlogPostsCell></BlogPostsCell>
        

      </BlogLayout>

      </>
   
  )
}

export default HomePage
