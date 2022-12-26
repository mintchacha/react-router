import axios from 'axios'
import { useEffect, useState } from 'react'
import Posts from './Posts'
import Pagination from './Pagination'

function Sample02(){
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10;
  useEffect(() => {
    const feetData = async () => {
      const response = await axios.get('./data.json')
      setPosts(response.data)
    }
    feetData();
  })

  const indexOfLast = currentPage * postsPerPage
  const indexOffirst = indexOfLast - postsPerPage;
  const currentPosts = posts => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOffirst, indexOfLast)
    return currentPosts
  }
  return(
    <div>
      <Posts posts={currentPosts(posts)}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      />
    </div>
  )
}
export default Sample02