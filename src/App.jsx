import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Areas from './pages/Areas'
import Equipe from './pages/Equipe'
import PerfilAdvogado from './pages/PerfilAdvogado'
import Contato from './pages/Contato'
import Formulario from './pages/Formulario'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/equipe/:slug" element={<PerfilAdvogado />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </ThemeProvider>
  )
}
