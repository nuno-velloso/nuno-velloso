export default function Contactos() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Contactos
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Mapa */}
          <div className="relative w-full h-72 md:h-full rounded overflow-hidden">
            <iframe
              title="mapa"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?hl=pt&q=Centro%20H%C3%ADpico%20Quinta%20da%20Marinha,%20Cascais,%20Portugal&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.1) opacity(0.9)" }}
            />
          </div>

          {/* Bloco de contactos + form visual */}
          <div className="bg-white rounded-lg p-6 shadow">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Morada:</strong> Centro Hípico Quinta da Marinha,
                Cascais, Portugal
              </li>
              <li>
                <strong>Telefone:</strong> 914 203 139
              </li>
              <li>
                <strong>Email:</strong> nunovelloso@sapo.pt
              </li>
              <li>
                <strong>Horário:</strong> Sempre aberto
              </li>
            </ul>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  className="w-full rounded border border-gray-300 px-3 py-2 h-32 outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <button className="inline-flex items-center rounded bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
                Enviar
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Resposta típica: 24–48h úteis.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
