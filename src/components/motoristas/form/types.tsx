import { z } from "zod";
import { schemaForm } from "./schema";

export type FormProps = z.infer<typeof schemaForm>;

export type motoristaProps = {
    id: string,
    nome: string,
    sobrenome: string,
    dataNasc: string,
    rg: string,
    cpf: string,
    cep: string,
    street: string,
    number: string,
    district: string,
    complement: string,
    city: string,
    state: string,
    telefone: string,
    email: string,
    categoria: string,
    numHabilitacao: string,
    validade: string,
    dataPrimeiraHab: string,
    observations: string,
};

export interface TabsProps {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}
  
export interface NavigationButtonsProps {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}