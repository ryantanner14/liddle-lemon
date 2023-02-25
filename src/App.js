import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import About from './Components/About';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  console.log("I rendered")
  return (

    <>

      <div className='App'>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
        {/* <Main></Main> */}
        <Footer></Footer>
      </div>
    </>

  );
}

export default App;
