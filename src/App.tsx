import './styles/reset.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPlayList from './pages/MyPlaylist';
import MyPlayListDetail from './pages/MyPlaylistDetail';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import AuthRoute from './route/AuthRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myplaylist" element={<AuthRoute />}>
            <Route path="/myplaylist" element={<MyPlayList />} />
            <Route path="/myplaylist/:id" element={<MyPlayListDetail />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
