import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Fecha ao navegar
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Esc fecha + bloqueio de scroll quando aberto
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
      <header className="text-gray-600 body-font border-b bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-5">
          {/* Logo / Marca */}
          <Link to="/" className="flex items-center text-gray-900">
            <img
              src={logo}
              alt="Nuno Velloso"
              className="h-10 w-10 md:h-14 md:w-14 rounded-full object-contain"
            />
            <span className="ml-3 md:ml-4 text-xl">Nuno Velloso</span>
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center text-base gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-2 py-1 ${
                  isActive ? "font-semibold underline" : "hover:underline"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/servicos"
              className={({ isActive }) =>
                `px-2 py-1 ${
                  isActive ? "font-semibold underline" : "hover:underline"
                }`
              }
            >
              Serviços
            </NavLink>
            <NavLink
              to="/contactos"
              className={({ isActive }) =>
                `px-2 py-1 ${
                  isActive ? "font-semibold underline" : "hover:underline"
                }`
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
              // Ícone X
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
              // Ícone hambúrguer
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

        {/* Menu mobile (slide down) */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t bg-white transition-all duration-200 relative z-50 ${
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
            <NavLink
              to="/servicos"
              className={({ isActive }) =>
                `py-2 ${
                  isActive ? "font-semibold underline" : "hover:underline"
                }`
              }
            >
              Serviços
            </NavLink>
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

      {/* Overlay (só mobile) */}
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
