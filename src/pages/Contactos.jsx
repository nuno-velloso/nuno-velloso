import { useState } from "react";
import emailjs from "@emailjs/browser";

// lê só uma vez as env vars
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contactos() {
  const ADDRESS = "Centro Hípico Quinta da Marinha, Cascais, Portugal";
  const PHONE_DISPLAY = "914 203 139";
  const PHONE_LINK = "+351914203139";
  const EMAIL = "nunovelloso@sapo.pt";
  const MAPS_URL =
    "https://www.google.com/maps?q=Centro+H%C3%ADpico+Quinta+da+Marinha,+Cascais&hl=pt";

  const [status, setStatus] = useState({ type: "idle", msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", msg: "" });

    const form = e.currentTarget;
    const data = {
      from_name: form.name.value.trim(),
      from_email: form.email.value.trim(),
      message: form.message.value.trim(),
      _honeypot: form.company?.value || "", // anti-spam
    };

    if (!data.from_email || !data.message) {
      setStatus({
        type: "error",
        msg: "Preenche o email e a mensagem, por favor.",
      });
      return;
    }
    if (data._honeypot) {
      setStatus({ type: "error", msg: "Falha de validação." });
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({ type: "success", msg: "Mensagem enviada. Obrigado!" });
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Não foi possível enviar agora. Tenta novamente mais tarde.",
      });
    }
  }

  return (
    <section className="container mx-auto px-5 py-12 md:py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contactos</h1>

      <div className="grid md:grid-cols-2 items-stretch gap-8">
        {/* Mapa */}
        <div className="w-full overflow-hidden rounded-lg">
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

        {/* Info + Botões + Form */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm h-full">
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

          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Abrir no Google&nbsp;Maps
            </a>
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center rounded border px-4 py-2 text-gray-900 hover:bg-gray-50"
            >
              Ligar
            </a>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* honeypot anti-spam (escondido) */}
            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                name="name"
                type="text"
                className="mt-1 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="O teu nome (opcional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="o-teu@email.pt"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={7}
                required
                className="mt-1 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="inline-flex items-center rounded bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700 disabled:opacity-60"
            >
              {status.type === "loading" ? "A enviar..." : "Enviar"}
            </button>

            <p className="text-xs text-gray-500">
              Resposta típica: 24–48h úteis.
            </p>

            {status.type === "success" && (
              <p className="text-sm text-green-600 mt-2">{status.msg}</p>
            )}
            {status.type === "error" && (
              <p className="text-sm text-red-600 mt-2">{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
