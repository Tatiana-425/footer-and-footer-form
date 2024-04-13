import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from "./Footer.1.jsx";
import FooterForm from "./FooterForm.jsx";
import MainPart from './MainPart.jsx';

function App() {
  return (
    <div className="App">
      <MainPart/>
      <Router>
        <Routes>
          <Route path="/" element={<Footer/>}/>
          <Route path="/form"  element={<FooterForm/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;