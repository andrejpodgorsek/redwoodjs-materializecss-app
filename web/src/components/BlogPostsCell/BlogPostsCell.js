export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <div class="row">
      <div class="col s12 m6">
        <div class="card white lighten-1">
          <div class="card-content black-text">
            <span class="card-title">{post.title}</span>
            <p>
              {post.body}
            </p>
          </div>
          <div class="card-action">
           <span class="lime-text text-darken-4">Posted at: {post.createdAt}</span>
            
          </div>
        </div>
      </div>
    </div>
  ))
}
