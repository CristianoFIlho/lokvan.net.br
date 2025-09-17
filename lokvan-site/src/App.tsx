import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Fleet from './pages/Fleet'
import Quote from './pages/Quote'
import Contact from './pages/Contact'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/frota" element={<Fleet />} />
        <Route path="/orcamento" element={<Quote />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </MainLayout>
  )
}

export default App