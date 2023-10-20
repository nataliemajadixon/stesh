
import './App.css';
import Home from './components/Home/Home';
import Navbars from './components/Navbar/Navbar';
import About from './components/AboutUs/AboutUs';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
  <Navbars />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/services' element={<Services />} />
<Route path='/about' element={<About />} />
<Route path='/career' element={<Career />} />
<Route path='/contact' element={<Contact />} />
</Routes>
<Footer />
    </>
  );
}

export default App;
