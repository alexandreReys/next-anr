import { z } from 'zod';

export const schemaForm = z.object({
  motoristaData: z.object({
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
  motoristaData: {
    id: field.motoristaData.id,
    nome: field.motoristaData.nome,
    sobrenome: field.motoristaData.sobrenome,
    dataNasc: field.motoristaData.dataNasc,
    rg: field.motoristaData.rg,
    cpf: field.motoristaData.cpf,
    cep: field.motoristaData.cep,
    street: field.motoristaData.street,
    number: field.motoristaData.number,
    district: field.motoristaData.district,
    complement: field.motoristaData.complement,
    city: field.motoristaData.city,
    state: field.motoristaData.state,
    telefone: field.motoristaData.telefone,
    email: field.motoristaData.email,
    categoria: field.motoristaData.categoria,
    numHabilitacao: field.motoristaData.numHabilitacao,
    validade: field.motoristaData.validade,
    dataPrimeiraHab: field.motoristaData.dataPrimeiraHab,
    observations: field.motoristaData.observations,
  }
}));

