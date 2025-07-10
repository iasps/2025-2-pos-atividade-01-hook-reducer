import { Tarefa } from "@/types/tarefa";

type Action =
  | { type: "ADICIONAR"; payload: Tarefa }
  | { type: "EDITAR"; payload: Tarefa }
  | { type: "REMOVER"; payload: string }
  | { type: "CARREGAR"; payload: Tarefa[] };

const salvarLocalStorage = (tarefas: Tarefa[]) => {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

export const tarefaReducer = (state: Tarefa[], action: Action): Tarefa[] => {
  let novoEstado: Tarefa[];

  switch (action.type) {
    case "ADICIONAR":
      novoEstado = [...state, action.payload];
      salvarLocalStorage(novoEstado);
      return novoEstado;

    case "EDITAR":
      novoEstado = state.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
      salvarLocalStorage(novoEstado);
      return novoEstado;

    case "REMOVER":
      novoEstado = state.filter((t) => t.id !== action.payload);
      salvarLocalStorage(novoEstado);
      return novoEstado;

    case "CARREGAR":
      return action.payload;

    default:
      return state;
  }
};
