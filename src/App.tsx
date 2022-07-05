import './styles/reset.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPlayList from './pages/MyPlaylist';
import MyPlayListDetail from './pages/MyPlaylistDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/myplaylist" element={<MyPlayList />} />
          <Route element={<MyPlayListDetail />} path="/myplaylist/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
