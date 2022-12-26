import './Posts.css'

function ListItem({post}){
  return(
    <>
      <figure>
        <img src={post.image} alt={post.name}/>
        <figcaption>
          {post.name}
        </figcaption>
      </figure>
    </>
  )
}

function Posts({posts}){
  return(
    <ul>
      {posts.map(post => <li key={post.id}><ListItem post={post}/></li>)}
    </ul>
  )
}
export default Posts;