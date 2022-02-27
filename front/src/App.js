import { HashRouter, Route, Routes } from "react-router-dom";
import Calendrier from "./pages/Calendrier";
import Equipe from "./pages/Equipe";
import Home from "./pages/Home";
import Messagerie from "./pages/Messagerie";
import Profil from "./pages/Profil";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/calendrier" exact element={<Calendrier />} />
        <Route path="/messagerie" exact element={<Messagerie />} />
        <Route path="/equipe" exact element={<Equipe />} />
        <Route path="/Profil" exact element={<Profil />} />
      </Routes>
    </HashRouter>
  );
}

export default App;