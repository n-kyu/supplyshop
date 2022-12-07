import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "componentes/Post";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import Contato from "paginas/Contato";
import NaoEncontrada from "paginas/NaoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Menu />

      <Routes>        
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />  
          <Route path="contato" element={<Contato />} />       
        </Route>

        <Route path="posts/:id/*" element={<Post />} />     
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>
      
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;