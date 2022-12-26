import Nav from './Nav'
import Footer from './Footer'



function App({children}) {
  return (
    <div id="wrap">
      <Nav/>
      <div>{children}</div>
      <Footer/>
    </div>
  );
}

export default App;
