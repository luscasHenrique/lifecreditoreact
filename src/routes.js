import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS

// PAGINAS
import Home from './pages/Home';
import CadastroUsuario from './pages/CadastrosUsuario';
import Clientes from './pages/Clientes';
import Indicar from './pages/Indicar';
import Login from './pages/Login';
import Parceiros from './pages/Parceiros';
import Servicos from './pages/Servicos';
import Simulador from './pages/Simulador';
import Tipos from './pages/Tipos';
import AtualizarUsuario from './pages/AtualizarUsuario';
import AtualizarSenha from './pages/AtualizarSenha';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<CadastroUsuario/>} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/indicar" element={<Indicar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/tipos" element={<Tipos />} />
          <Route path="/atualizar-usuario" element={<AtualizarUsuario/>}/>
          <Route path="/atualizar-senha" element={<AtualizarSenha/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;








// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // COMPONENTS
// import Sidebar from './components/Sidebar';

// // PAGINAS
// import Home from './pages/Home';
// import Cadastros from './pages/Cadastros';
// import Clientes from './pages/Clientes';
// import Indicar from './pages/Indicar';
// import Login from './pages/Login';
// import Parceiros from './pages/Parceiros';
// import Servicos from './pages/Serviços';
// import Simulador from './pages/Simulador';
// import Tipos from './pages/Tipos';

// function Layout({ children }) {
//   // Verifica se a rota atual é a rota de login
//   const isLoginPage = window.location.pathname === '/login';

//   // Renderiza a sidebar somente se não for a página de login
//   return (
//     <>
//       {!isLoginPage && <Sidebar />}
//       <main>{children}</main>
//     </>
//   );
// }

// function RoutesApp() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Utilize o componente Layout para envolver todas as rotas */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/cadastros" element={<Cadastros />} />
//           <Route path="/clientes" element={<Clientes />} />
//           <Route path="/indicar" element={<Indicar />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/parceiros" element={<Parceiros />} />
//           <Route path="/servicos" element={<Servicos />} />
//           <Route path="/simulador" element={<Simulador />} />
//           <Route path="/tipos" element={<Tipos />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default RoutesApp;
