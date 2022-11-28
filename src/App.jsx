import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  let signedIn = false;

  return (
    <div className="App">
      <Navbar signedIn={signedIn}/>
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
