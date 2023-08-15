const inputStyles = 'flex w-full border border-gray-500 px-2 py-1 rounded';
const inputCodeStyles = 'flex w-36 border border-gray-500 px-2 py-1 rounded';
const buttonStyles = 'flex w-full justify-center text-white bg-blue-600 p-3 rounded font-bold mt-6';
const labelStyles = 'w-30 inline-block mt-2';

export default function Motoristas() {

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
          <form onSubmit={handleFormSubmit} className="max-w-full">
            
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
            
            <h1 className="text-2xl text-gray-500 mt-4 mb-2 border-b w-full"><strong>Endereço</strong></h1>

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

            <h1 className="text-2xl text-gray-500 mt-4 mb-2 border-b w-full"><strong>Habilitação</strong></h1>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="categoria" className={labelStyles}>Categoria:</label>
                <input id="categoria" name="categoria" className={inputStyles} type="text" />
              </div>

              <div className="flex-1">
                <label htmlFor="numHabilitacao" className={labelStyles}>Numero Hab:</label>
                <input id="numHabilitacao" name="numHabilitacao" className={inputStyles} type="text" />
              </div>

              <div className="flex-1">
                <label htmlFor="validade" className={labelStyles}>Validade:</label>
                <input id="validade" name="validade" className={inputStyles} type="text" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-3/10">
                <label htmlFor="telefone" className={labelStyles}>Primeira:</label>
                <input id="telefone" name="telefone" className={inputStyles} type="text" />
              </div>

              <div className="flex-grow">
                <label htmlFor="dataPrimeiraHab" className={labelStyles}>Observação:</label>
                <input id="dataPrimeiraHab" name="dataPrimeiraHab" className={inputStyles} type="text" />
              </div>
            </div>


            <button type="submit" className={buttonStyles}>Enviar</button>
          </form>
        </div>
      </main>
    </>
  )
}
