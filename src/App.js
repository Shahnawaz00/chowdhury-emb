import { Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import {Machinery} from "./components/Machinery";
import {Design} from "./components/Design";
import  {Contact}  from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App bg-slate-50 ">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='machinery' element={<Machinery/>} /> 
        <Route path="design" element={<Design/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;