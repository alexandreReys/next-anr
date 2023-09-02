import React, { useState } from 'react';

const inputStyles = 'flex w-full border border-gray-500 px-2 py-1 rounded';
const inputCodeStyles = 'flex w-36 border border-gray-500 px-2 py-1 rounded';
const labelStyles = 'w-30 inline-block mt-2';

interface TabsProps {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

interface NavigationButtonsProps {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const Tabs: React.FC<TabsProps> = ({ currentTab, setCurrentTab }) => {
  const tabStyles = 'cursor-pointer px-4 py-2 border-b-4';
  const activeTabStyles = `${tabStyles} border-blue-600`;

  return (
    <>
      <div className="flex space-x-4">
        <button
          className={currentTab === 1 ? activeTabStyles : tabStyles}
          onClick={() => setCurrentTab(1)}
        >
          Dados Gerais
        </button>
        <button
          className={currentTab === 2 ? activeTabStyles : tabStyles}
          onClick={() => setCurrentTab(2)}
        >
          Endereço
        </button>
        <button
          className={currentTab === 3 ? activeTabStyles : tabStyles}
          onClick={() => setCurrentTab(3)}
        >
          Habilitação
        </button>
      </div>
      <hr className="border-b-2 border-gray-200 w-full mt-8 mb-4" />
    </>
  );
};

const GeneralInformation = () => (
  <>
    <label htmlFor="id" className={labelStyles}>Codigo:</label>
    <input id="id" name="id" className={inputCodeStyles} type="text" />

    <div className="flex gap-4">
      <div className="flex-1">
        <label htmlFor="nome" className={labelStyles}>Nome:</label>
        <input id="nome" name="nome" className={inputStyles} type="text" />
      </div>
      <div className="flex-1">
        <label htmlFor="sobrenome" className={labelStyles}>Sobrenome:</label>
        <input id="sobrenome" name="sobrenome" className={inputStyles} type="text" />
      </div>
    </div>

    <label htmlFor="dataNasc" className={labelStyles}>Data Nasc:</label>
    <input id="dataNasc" name="dataNasc" className={inputCodeStyles} type="text" />

    <div className="flex gap-4">
      <div className="flex-1">
        <label htmlFor="rg" className={labelStyles}>RG:</label>
        <input id="rg" name="rg" className={inputStyles} type="text" />
      </div>
      <div className="flex-1">
        <label htmlFor="cpf" className={labelStyles}>CPF:</label>
        <input id="cpf" name="cpf" className={inputStyles} type="text" />
      </div>
    </div>
  </>
);

const Address = () => (
  <>
    <label htmlFor="cep" className={labelStyles}>Cep:</label>
    <input id="cep" name="cep" className={inputCodeStyles} type="text" />

    <div className="flex gap-4">
      <div className="flex-grow flex-shrink-0">
        <label htmlFor="street" className={labelStyles}>Rua:</label>
        <input id="street" name="street" className={inputStyles} type="text" />
      </div>

      <div className="w-2/12">
        <label htmlFor="number" className={labelStyles}>Número:</label>
        <input id="number" name="number" className={inputStyles} type="text" />
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-1">
        <label htmlFor="district" className={labelStyles}>Bairro:</label>
        <input id="district" name="district" className={inputStyles} type="text" />
      </div>

      <div className="flex-1">
        <label htmlFor="complement" className={labelStyles}>Complemento:</label>
        <input id="complement" name="complement" className={inputStyles} type="text" />
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-grow flex-shrink-0">
        <label htmlFor="city" className={labelStyles}>Cidade:</label>
        <input id="city" name="city" className={inputStyles} type="text" />
      </div>

      <div className="w-2/12">
        <label htmlFor="state" className={labelStyles}>Estado:</label>
        <input id="state" name="state" className={inputStyles} type="text" />
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-1">
        <label htmlFor="telefone" className={labelStyles}>Telefone:</label>
        <input id="telefone" name="telefone" className={inputStyles} type="text" />
      </div>

      <div className="flex-1">
        <label htmlFor="email" className={labelStyles}>Email:</label>
        <input id="email" name="email" className={inputStyles} type="text" />
      </div>
    </div>
  </>
);

const License = () => (
  <>
    <div className="flex gap-4">
      <div className="flex-1">
        <label htmlFor="categoria" className={labelStyles}>Categoria:</label>
        <input id="categoria" name="categoria" className={inputStyles} type="text" />
      </div>

      <div className="flex-1">
        <label htmlFor="numHabilitacao" className={labelStyles}>Numero Hab:</label>
        <input id="numHabilitacao" name="numHabilitacao" className={inputStyles} type="text" />
      </div>

    </div>

    <div className="flex gap-4">
      <div className="flex-1">
        <label htmlFor="validade" className={labelStyles}>Validade:</label>
        <input id="validade" name="validade" className={inputStyles} type="text" />
      </div>

      <div className="flex-1">
        <label htmlFor="dataPrimeiraHab" className={labelStyles}>Primeira Habilitação:</label>
        <input id="dataPrimeiraHab" name="dataPrimeiraHab" className={inputStyles} type="text" />
      </div>
    </div>

    <div className="flex">
      <div className="flex-grow">
        <label htmlFor="Observations" className={labelStyles}>Observação:</label>
        <input id="Observations" name="dataPrimeiraHab" className={inputStyles} type="text" />
      </div>
    </div>
  </>
);

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ currentTab, setCurrentTab }) => {
  const navButtonStyles = 'text-white bg-blue-600 p-3 rounded font-bold';
  const buttonStyles = 'text-white bg-blue-600 p-3 rounded font-bold';

  return (
    <div className="flex justify-between mt-6">
      <div className="flex-grow">
        {currentTab !== 1 && <button type="button" className={navButtonStyles} onClick={() => setCurrentTab(currentTab - 1)}>Voltar</button>}
      </div>
      <div className="flex justify-end">
        {currentTab !== 3 && <button type="button" className={navButtonStyles} onClick={() => setCurrentTab(currentTab + 1)}>Próximo</button>}
      </div>
      {currentTab === 3 && <button type="submit" className={buttonStyles}>Salvar</button>}
    </div>
  );
};

export default function Motoristas() {
  const [currentTab, setCurrentTab] = useState(1);
  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto pt-4 pb-1 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Motoristas</h1>
        </div>
      </header>
      <main className="mx-auto">
        <div className="max-w-7xl mx-auto pb-6 pt-2 px-4 sm:px-6 lg:px-8">
          <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

          <form onSubmit={handleFormSubmit} className="max-w-full">
            {currentTab === 1 && <GeneralInformation />}
            {currentTab === 2 && <Address />}
            {currentTab === 3 && <License />}

            <NavigationButtons currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </form>
        </div>
      </main>
    </>
  );
}
