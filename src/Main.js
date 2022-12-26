import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './components/App'
import HomePage from './pages/Homepage'
import Sample01 from './pages/Sample01'
import Sample02 from './pages/Sample02'
import Sample03 from './pages/Sample03'
import Sample04 from './pages/Sample04'
import NotFind from './pages/NotFind'

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="list01" element={<Sample01/>}/>
          <Route path="list02" element={<Sample02/>}/>
          <Route path="list03">
            <Route index element={<Sample03/>}/>
            <Route path="list03-01" element={<Sample04/>}/>
          </Route>
          <Route path="*" element={<NotFind/>}/>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
