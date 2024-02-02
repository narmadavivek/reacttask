import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import All from "./pages/all";
import FullStackDev from './pages/full stack dev';
import DataScience from "./pages/data science";
import CyberSecurity from "./pages/cyber security";
import Career from "./pages/career";
const App= () =>{
  return (
   <Router>
   <Navbar/>
   <Routes>
    <Route path="/" element={<All/>}/>
    <Route path="/full stack dev" element={<FullStackDev/>}/>
    <Route path="/data science" element={<DataScience />}/>
    <Route path="/cyber security" element={<CyberSecurity/>}/>
    <Route path="/career" element={<Career/>}/>
   </Routes>
   </Router>
  );
}

export default App;
