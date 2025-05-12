import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Singlepage from './pages/single/Singlepage'
import Barchasi from './pages/barchasi/Barchasi'
import HeaderCatalog from './components/headerCatalog/HeaderCatalog'
import Favourates from './pages/favourates/Favourates'
import Footer from './components/footer/Footer'
import Savat from './pages/savat/Savat'
import Brendlar from './components/brendlar/Brendlar'
import Ajoyib from './components/ajoyib/Ajoyib'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Barchasi />} />
        <Route path="/favourates" element={<Favourates />} />
        <Route path="/savat" element={<Savat />} />
        
        <Route path="/Singlepage/:id" element={<Singlepage />} />
      </Routes>
      <Ajoyib/>
      <Brendlar/>
      <Footer/>
    </>
  )
}

export default App
