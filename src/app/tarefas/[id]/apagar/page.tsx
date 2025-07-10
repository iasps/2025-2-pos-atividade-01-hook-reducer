"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Tarefa } from "@/types/tarefa";
import { useTarefas } from "@/context/TarefaContext";

export default function ApagarTarefa() {
  const router = useRouter();
  const { id } = useParams();
  const { tarefas, dispatch } = useTarefas();
  const [tarefa, setTarefa] = useState<Tarefa | null>(null);

  useEffect(() => {
    const encontrada = tarefas.find((t) => t.id === id);
    setTarefa(encontrada || null);
  }, [id, tarefas]);

  const confirmar = () => {
    dispatch({ type: "REMOVER", payload: id as string });
    router.push("/tarefas");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6 text-center">
        <h1 className="text-2xl font-bold mb-6 text-red-600">
          Apagar Tarefa
        </h1>
        {tarefa ? (
          <>
            <p className="mb-6">
              Tem certeza que deseja apagar a tarefa: <strong>{tarefa.titulo}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => router.push("/tarefas")}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
              <button
                onClick={confirmar}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Sim, apagar
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Tarefa não encontrada.</p>
        )}
      </div>
    </main>
  );
}
