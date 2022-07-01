import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import './styles/reset.scss';
import MyPlayListDetail from './pages/MyPlaylistDetail';
import MyPlayList from './pages/MyPlaylist';
import Login from './pages/Auth/Signin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<MyPlayList />} path="/myplaylist" />
          <Route element={<MyPlayListDetail />} path="/myplaylist/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
