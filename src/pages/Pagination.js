import styled from 'styled-components';
import './Pagination.css'

const ULElement = styled.ul`
  display:flex;
  justify-content:center;
`
const UlSpan = styled.span`
  display:block;
  border:1px solid #666;
  background-color:#333;
  color:#fff;
  padding:10px;
`
const UlLi = styled.li`
  margin:0 20px;
`

function Pagination({ postsPerPage, totalPosts, paginate}){
  const pageNumbers = [];
  for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
  }
  return(
    <div className="num">
      <ul>
        { pageNumbers.map(
          (number) => {
            return <UlLi key={number}>
            <UlSpan className="item" onClick={()=>{paginate(number)}}>{number}</UlSpan>
            </UlLi>
          })}
      </ul>
    </div>
  )
}
export default Pagination