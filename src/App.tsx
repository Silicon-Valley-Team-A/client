import './styles/reset.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>{/* <Route path="/" element={} /> */}</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
