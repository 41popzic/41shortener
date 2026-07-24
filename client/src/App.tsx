import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RedirectPage from './pages/RedirectPage';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:code" element={<RedirectPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
