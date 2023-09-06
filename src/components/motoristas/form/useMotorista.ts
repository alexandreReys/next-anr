import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaForm } from "./schema";
import { motoristaProps, FormProps } from "./types";

export const useMotorista = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      motoristaData: {
        id: '',
        nome: '',
        sobrenome: '',
        dataNasc: '',
        rg: '',
        cpf: '',
        cep: '',
        street: '',
        number: '',
        district: '',
        complement: '',
        city: '',
        state: '',
        telefone: '',
        email: '',
        categoria: '',
        numHabilitacao: '',
        validade: '',
        dataPrimeiraHab: '',
        observations: '',
      }
    }
  });

  const inputStyles = 'flex w-full border border-gray-500 px-2 py-1 rounded';
  const inputCodeStyles = 'flex w-36 border border-gray-500 px-2 py-1 rounded';
  const labelStyles = 'w-30 inline-block mt-2';

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  }

  return {
    errors,
    register,
    handleFormSubmit,
    handleSubmit,
    inputStyles,
    inputCodeStyles,
    labelStyles,
  }
};
