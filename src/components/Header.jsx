import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // fecha o menu quando muda de rota/hash
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  // Esc fecha menu + bloqueio de scroll
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur text-gray-700">
        {/* altura fixa do header: 64px mobile / 80px desktop */}
        <div className="container mx-auto flex items-center justify-between px-5 h-16 md:h-20">
          {/* Marca */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Nuno Velloso"
              className="h-10 w-10 md:h-14 md:w-14 rounded-full object-contain"
            />
            <span className="ml-3 md:ml-4 text-lg md:text-xl font-medium text-gray-900">
              Nuno Velloso
            </span>
          </Link>

          {/* Navegação (desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : "hover:underline"
              }
            >
              Home
            </NavLink>

            {/* Aponta para a secção na Home */}
            <Link to="/#servicos" className="hover:underline">
              Serviços
            </Link>

            <NavLink
              to="/contactos"
              className={({ isActive }) =>
                isActive ? "font-semibold underline" : "hover:underline"
              }
            >
              Contactos
            </NavLink>
          </nav>

          {/* Botão hambúrguer (mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t bg-white transition-all duration-200 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="container mx-auto px-5 py-3 flex flex-col">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `py-2 ${
                  isActive ? "font-semibold underline" : "hover:underline"
                }`
              }
            >
              Home
            </NavLink>
            <Link to="/#servicos" className="py-2 hover:underline">
              Serviços
            </Link>
            <NavLink
              to="/contactos"
              className={({ isActive }) =>
                `py-2 ${
                  isActive ? "font-semibold underline" : "hover:underline"
                }`
              }
            >
              Contactos
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Overlay para fechar ao clicar fora (só mobile) */}
      <button
        type="button"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
        tabIndex={-1}
      />
    </>
  );
}
