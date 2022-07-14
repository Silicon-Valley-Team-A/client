import './styles/reset.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPlayList from './pages/MyPlaylist';
import MyPlayListDetail from './pages/MyPlaylistDetail';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import { useAppSelector } from './store';
import MusicPlayer from './components/MusicPlayer';
import { Header, Footer } from './components/Layout';

function App() {
  const { isAudioPlaying } = useAppSelector(state => state.audios);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myplaylist" element={<MyPlayList />} />
          <Route path="/myplaylist/:id" element={<MyPlayListDetail />} />
        </Routes>
        <Footer />
      </div>
      {isAudioPlaying && <MusicPlayer />}
    </BrowserRouter>
  );
}

export default App;
