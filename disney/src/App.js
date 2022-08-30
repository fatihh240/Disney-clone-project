import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
         <Routes>
         <Route path="/" element={<Home />} />
         </Routes>

    </Router>

    </div>
  );
}

export default App;
