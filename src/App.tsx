import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MoreInfo from './pages/MoreInfo'
import Escritura from './pages/Escritura'
import Papel from './pages/Papel'
import Oficina from './pages/Oficina'
import Tecnologia from './pages/Tecnologia'
import Details from './pages/DetailsProducts'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mas-info" element={<MoreInfo />} />
          <Route path="/escritura" element={<Escritura />} />
          <Route path="/papel" element={<Papel />} />
          <Route path="/oficina" element={<Oficina />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/details/:productId" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
