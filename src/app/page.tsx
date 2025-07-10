import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900 font-sans">
      <header className="bg-blue-700 text-white p-4 shadow">
        <h1 className="text-xl font-bold">Infoweb - Atividade 1º do 2º bimestre</h1>
      </header>

      <main className="flex-1 p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Hook Reducer e ShadcnUI
        </h2>
        <p className="mb-6">
          Projeto usando <code className="bg-gray-200 p-1 rounded">useReducer</code> e componentes reutilizáveis com <code className="bg-gray-200 p-1 rounded">shadcn/ui</code>.
        </p>
        <Link href="/tarefas">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition">
            Ir para tarefas
          </button>
        </Link>
      </main>

      <footer className="bg-gray-100 text-center text-sm py-4">
        <p>GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007</p>
        <p><a href="https://fsf.org/"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank">
            Copyright (C) 2007 Free Software Foundation, Inc.
          </a>
        </p>
      </footer>
    </div>
  );
}
