"use client";
import { useEffect, useReducer } from "react";
import { tarefaReducer } from "@/lib/reducer";
import { Tarefa } from "@/types/tarefa";
import Link from "next/link";

export default function ListaTarefas() {
  const [tarefas, dispatch] = useReducer(tarefaReducer, []);

  useEffect(() => {
    const local = localStorage.getItem("tarefas");
    if (local) {
      dispatch({ type: "CARREGAR", payload: JSON.parse(local) });
    }
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>

      <div className="flex gap-4 mb-6">
        <Link href="/">
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
            Voltar pra Home
          </button>
        </Link>

        <Link href="/tarefas/nova">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Nova Tarefa
          </button>
        </Link>
      </div>

      {tarefas.length === 0 ? (
        <p className="text-gray-500">Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul className="space-y-4">
          {tarefas.map((t: Tarefa) => (
            <li
              key={t.id}
              className="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{t.titulo}</h2>
                <p className="text-sm text-gray-600">{t.descricao}</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-2">
                <Link href={`/tarefas/${t.id}`}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                    Editar
                  </button>
                </Link>
                <Link href={`/tarefas/${t.id}/apagar`}>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Apagar
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
