import { z } from 'zod';

export const schemaForm = z.object({
  data: z.object({
    id: z.string(),
    nome: z.string(),
    sobrenome: z.string(),
    dataNasc: z.string(),
    rg: z.string(),
    cpf: z.string(),
    cep: z.string(),
    street: z.string(),
    number: z.string(),
    district: z.string(),
    complement: z.string(),
    city: z.string(),
    state: z.string(),
    telefone: z.string(),
    email: z.string(),
    categoria: z.string(),
    numHabilitacao: z.string(),
    validade: z.string(),
    dataPrimeiraHab: z.string(),
    observations: z.string(),
  })
}).transform((field) => ({
  data: {
    id: field.data.id,
    nome: field.data.nome,
    sobrenome: field.data.sobrenome,
    dataNasc: field.data.dataNasc,
    rg: field.data.rg,
    cpf: field.data.cpf,
    cep: field.data.cep,
    street: field.data.street,
    number: field.data.number,
    district: field.data.district,
    complement: field.data.complement,
    city: field.data.city,
    state: field.data.state,
    telefone: field.data.telefone,
    email: field.data.email,
    categoria: field.data.categoria,
    numHabilitacao: field.data.numHabilitacao,
    validade: field.data.validade,
    dataPrimeiraHab: field.data.dataPrimeiraHab,
    observations: field.data.observations,
  }
}));

