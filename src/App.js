import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import DigitalClockComp from "./pages/Watchers/Reloj/Reloj";
import Header from "./Components/Header/Header";
import HomePage from "./pages/Home/HomePage.jsx";
import WatchersPage from "./pages/Watchers/WatchersPage.jsx";
import Reloj from "./pages/Watchers/Reloj/Reloj";
import CuentaAtras from "./pages/Watchers/CuentaAtras/CuentaAtras";
import Cronometro from "./pages/Watchers/Cronometro/Cronometro";

function App() {
  return ( <Router>
    
      <header>
        <Header></Header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/watchers" element={<WatchersPage></WatchersPage>} />
          <Route path="/watchers/reloj" element={<Reloj></Reloj>} />
          <Route path="/watchers/cuentaAtras" element={<CuentaAtras></CuentaAtras>}/>
          <Route path="/watchers/cronometro" element={<Cronometro></Cronometro>}/>
        </Routes>
      </main>
      <footer></footer>
    
      </Router>
  );
}

export default App;
