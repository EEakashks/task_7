import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience';
import Footer from './components/Footer'
import Signup from './components/form/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={ <Skills/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
      <Footer/>
    </div>
       
  );
}

export default App;
