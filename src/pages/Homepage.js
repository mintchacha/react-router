import { useEffect } from "react"
import StyleButton from "./StyleButton"

function Homepage(){
  return(
    <div>
      <h1>Main페이지</h1>
      <p>
        welcome
      </p>
      <p>
        <StyleButton>버튼</StyleButton>
      </p>
    </div>
  )
}
export default Homepage