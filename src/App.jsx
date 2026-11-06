
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './assets/component/Navbar';
import Footer from './assets/component/Footer';
import Home from './assets/pages/Home';
import Programs from './assets/pages/Programs';
import Peoples from './assets/pages/Peoples';
import ScrollToTop from './assets/component/ScrollToTop';
import About from './assets/pages/about';
import Error from './assets/pages/404Error';
import MainLayout from './assets/layout/MainLayout';
import Findus from './assets/pages/Findus';
import ThisYear from './assets/pages/ThisYear';
import ProdukHukum from './assets/pages/ProdukHukum';
import JaringAsmara from './assets/pages/JaringAsmara';
import PressRelease from './assets/pages/PressRelease';
import Monitoring from './assets/pages/Monitoring';

function App() {
  
  const location = useLocation(); 


  const isErrorPage = location.pathname === '/404' || location.pathname === '*';

  return (
      
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/programs" element={<MainLayout><Programs /></MainLayout>} />
        <Route path="/people" element={<MainLayout><Peoples /></MainLayout>} />
        <Route path="/thisyear" element={<MainLayout><ThisYear /></MainLayout>} />
        <Route path="/jaringasmara" element={<MainLayout><JaringAsmara /></MainLayout>} />
        <Route path='/produkhukum' element={<MainLayout><ProdukHukum /></MainLayout>}/>
        <Route path='/pressrelease' element={<MainLayout><PressRelease /></MainLayout>}/>
        <Route path='/monitoring' element={<MainLayout><Monitoring /></MainLayout>}/>
        <Route path="*" element={<Error />} /> 
      </Routes>
  );
}

export default App;