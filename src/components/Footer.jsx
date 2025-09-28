import logo from "../assets/logo/logo.png";

export default function Footer() {
  const YEAR = new Date().getFullYear();
  const FB_URL = "https://www.facebook.com/NunoVellosoRidingSchool";

  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-5 py-8 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* marca */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Nuno Velloso — logótipo"
              className="h-10 w-10 rounded-full object-contain"
            />
            <span className="text-gray-900 font-medium">Nuno Velloso</span>
          </div>

          {/* copyright */}
          <p className="text-gray-500 text-sm">
            © {YEAR} Nuno Velloso — Todos os direitos reservados.
          </p>

          {/* social: só Facebook */}
          <div className="flex items-center gap-4">
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook — Nuno Velloso Riding School"
              className="text-gray-500 hover:text-gray-700 transition"
              title="Facebook"
            >
              {/* Ícone Facebook (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.04H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22C18.34 21.2 22 17.08 22 12.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
