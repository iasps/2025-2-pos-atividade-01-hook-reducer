"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Tarefa } from "@/types/tarefa";
import { useTarefas } from "@/context/TarefaContext";

export default function EditarTarefa() {
  const { tarefas, dispatch } = useTarefas();
  const router = useRouter();
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    const tarefa = tarefas.find((t) => t.id === id);
    if (tarefa) {
      setTitulo(tarefa.titulo);
      setDescricao(tarefa.descricao);
    }
  }, [id, tarefas]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const editada: Tarefa = {
      id: id as string,
      titulo,
      descricao,
      feita: false,
    };

    dispatch({ type: "EDITAR", payload: editada });

    router.push("/tarefas");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Editar Tarefa
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Título
            </label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => router.push("/tarefas")}
              className="w-full bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
