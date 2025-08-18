export default function Contactos() {
  return (
    <section className="text-gray-600 body-font relative">
      {/* Mapa */}
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=pt-PT&q=Centro%20H%C3%ADpico%20Quinta%20da%20Marinha%2C%20Cascais%2C%20Portugal&ie=UTF8&t=&z=15&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>

      {/* Cartão de contacto */}
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-4 font-medium title-font">
            Contactos
          </h2>

          {/* Info essencial */}
          <div className="space-y-3 text-sm text-gray-700 mb-6">
            <p className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>Centro Hípico Quinta da Marinha, Cascais, Portugal</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-0.5">📞</span>
              <a href="tel:+351914203139" className="hover:underline">
                914 203 139
              </a>
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-0.5">✉️</span>
              <a href="mailto:nunovelloso@sapo.pt" className="hover:underline">
                nunovelloso@sapo.pt
              </a>
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-0.5">⏰</span>
              <span>Sempre aberto</span>
            </p>
          </div>

          {/* Ações rápidas (sem botão de email) */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Centro+H%C3%ADpico+Quinta+da+Marinha%2C+Cascais%2C+Portugal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Abrir no Google Maps
            </a>
            <a
              href="tel:+351914203139"
              className="inline-flex items-center rounded bg-gray-100 px-4 py-2 text-gray-900 hover:bg-gray-200"
            >
              Ligar agora
            </a>
          </div>

          {/* Formulário sem backend (FormSubmit) */}
          <form
            action="https://formsubmit.co/nunovelloso@sapo.pt"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="Novo contacto — Site Nuno Velloso"
            />
            <input type="hidden" name="_template" value="table" />
            {/* troca SEU_DOMINIO após o deploy */}
            <input
              type="hidden"
              name="_next"
              value="https://SEU_DOMINIO/obrigado"
            />
            <input type="hidden" name="_captcha" value="false" />
            {/* honeypot anti-spam */}
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-indigo-600 hover:bg-indigo-700 border-0 py-2 px-6 rounded text-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
