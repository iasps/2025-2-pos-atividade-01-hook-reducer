"use client";
import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { tarefaReducer } from "@/lib/reducer";
import { Tarefa } from "@/types/tarefa";

type TarefaContextType = {
  tarefas: Tarefa[];
  dispatch: React.Dispatch<any>;
};

const TarefaContext = createContext<TarefaContextType | undefined>(undefined);

export const TarefaProvider = ({ children }: { children: ReactNode }) => {
  const [tarefas, dispatch] = useReducer(tarefaReducer, []);

  useEffect(() => {
    const salvas = localStorage.getItem("tarefas");
    if (salvas) {
      dispatch({ type: "CARREGAR", payload: JSON.parse(salvas) });
    }
  }, []);

  return (
    <TarefaContext.Provider value={{ tarefas, dispatch }}>
      {children}
    </TarefaContext.Provider>
  );
};

export const useTarefas = () => {
  const context = useContext(TarefaContext);
  if (!context) {
    throw new Error("useTarefas precisa estar dentro do TarefaProvider");
  }
  return context;
};
