import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainPage} from './components/MainPage';
import {PranjalPortfolio} from './components/PranjalPortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/investInHer" element={<PranjalPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
