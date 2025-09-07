export default function Contactos() {
  const ADDRESS = "Centro Hípico Quinta da Marinha, Cascais, Portugal";
  const PHONE_DISPLAY = "914 203 139";
  const PHONE_LINK = "+351914203139";
  const EMAIL = "nunovelloso@sapo.pt";
  const MAPS_URL =
    "https://www.google.com/maps?q=Centro+H%C3%ADpico+Quinta+da+Marinha,+Cascais&hl=pt";

  return (
    <section className="container mx-auto px-5 py-12 md:py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contactos</h1>

      {/* igualar alturas */}
      <div className="grid md:grid-cols-2 items-stretch gap-8">
        {/* MAPA */}
        <div className="w-full overflow-hidden rounded-lg">
          {/* Em mobile usa aspeto; em md+ enche a coluna toda */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[520px]">
            <iframe
              title="mapa"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=pt&q=Centro%20H%C3%ADpico%20Quinta%20da%20Marinha,%20Cascais,%20Portugal&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            />
          </div>
        </div>

        {/* INFO + BOTÕES + FORM — sem borda, mesma altura */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm h-full">
          {/* Dados */}
          <dl className="space-y-3 text-gray-700 mb-6">
            <div>
              <dt className="font-semibold">Morada:</dt>
              <dd>{ADDRESS}</dd>
            </div>
            <div>
              <dt className="font-semibold">Telefone:</dt>
              <dd>
                <a
                  href={`tel:${PHONE_LINK}`}
                  className="text-indigo-600 hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Email:</dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-indigo-600 hover:underline"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Horário:</dt>
              <dd>Sempre aberto</dd>
            </div>
          </dl>

          {/* Botões de ação */}
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11a3 3 0 100-6 3 3 0 000 6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5C19.5 15 12 21 12 21S4.5 15 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="ml-2">Abrir no Google&nbsp;Maps</span>
            </a>

            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center rounded border px-4 py-2 text-gray-900 hover:bg-gray-50"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5.25c0-.414.336-.75.75-.75h2.25a.75.75 0 01.75.705 12.01 12.01 0 001.186 4.372.75.75 0 01-.173.843l-1.59 1.59a.75.75 0 000 1.06l3.28 3.28a.75.75 0 001.06 0l1.59-1.59a.75.75 0 01.844-.173 12.01 12.01 0 004.372 1.186.75.75 0 01.705.75v2.25a.75.75 0 01-.75.75H18.75C10.3 21 3 13.7 3 5.25z"
                />
              </svg>
              <span className="ml-2">Ligar</span>
            </a>
          </div>

          {/* Formulário (mantém a tua integração se usas emailJS) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mensagem enviada. Obrigado!");
            }}
          >
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 mb-4 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="o-teu@email.pt"
            />

            <label className="block text-sm font-medium text-gray-700">
              Mensagem
            </label>
            <textarea
              rows={7}
              required
              className="mt-1 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Como podemos ajudar?"
            />

            <button
              type="submit"
              className="mt-4 inline-flex items-center rounded bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
            >
              Enviar
            </button>

            <p className="mt-2 text-xs text-gray-500">
              Resposta típica: 24–48h úteis.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
