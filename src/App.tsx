import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import MyPlayList from './components/MyPlayList';
import Signup from './components/Signup';
import './styles/reset.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<MyPlayList />} path="/myplaylist" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
