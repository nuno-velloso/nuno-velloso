export default function Servicos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Serviços</h1>
      <p className="text-gray-700 mb-6">
        Aqui vamos listar os serviços (ex.: aulas de equitação, passeios,
        treinos, estágios, etc.).
      </p>

      {/* Exemplo de grelha simples */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold text-lg mb-2">Aulas de Equitação</h2>
          <p className="text-sm text-gray-600">
            Iniciação e aperfeiçoamento. Aulas individuais e em grupo.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold text-lg mb-2">Passeios</h2>
          <p className="text-sm text-gray-600">
            Passeios guiados em trilhos, adequados a vários níveis.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold text-lg mb-2">Treino de Cavalos</h2>
          <p className="text-sm text-gray-600">
            Trabalho de base, correções e preparação para eventos.
          </p>
        </div>
      </div>
    </section>
  );
}
