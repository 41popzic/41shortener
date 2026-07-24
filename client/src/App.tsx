import { HashRouter, Routes, Route } from 'react-router-dom'
import RedirectPage from './pages/RedirectPage';
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<RedirectPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
