import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contactos from "./pages/Contactos";

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/servicos"
          element={<Navigate to="/#servicos" replace />}
        />
        <Route path="/eventos" element={<Navigate to="/#galeria" replace />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
