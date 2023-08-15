const inputStyles = 'flex w-full border border-gray-500 px-2 py-1 rounded';
const inputCodeStyles = 'flex w-36 border border-gray-500 px-2 py-1 rounded';
const buttonStyles = 'flex w-full justify-center text-white bg-blue-600 p-3 rounded font-bold mt-6';
const labelStyles = 'w-30 inline-block mt-2';

export default function Cargas() {

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };
  
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto pt-4 pb-1 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Cargas</h1>
        </div>
      </header>

      <main className="mx-auto">
        <div className="max-w-7xl mx-auto pb-6 pt-2 px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleFormSubmit} className="max-w-full">
            
            <label htmlFor="codigo" className={labelStyles}>Codigo:</label>
            <input id="codigo" name="codigo" className={inputCodeStyles} type="text" />

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="veiculo" className={labelStyles}>Veiculo:</label>
                <input id="veiculo" name="veiculo" className={inputStyles} type="text" />
              </div>

              <div className="flex-1">
                <label htmlFor="motorista" className={labelStyles}>Motorista:</label>
                <input id="motorista" name="motorista" className={inputStyles} type="text" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="dataCad" className={labelStyles}>Data Cad:</label>
                <input id="dataCad" name="dataCad" className={inputStyles} type="text" />
              </div>

              <div className="flex-1">
                <label htmlFor="dataSaida" className={labelStyles}>Data Saida:</label>
                <input id="dataSaida" name="dataSaida" className={inputStyles} type="text" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="placaCarreta" className={labelStyles}>Placa Carreta:</label>
                <input id="placaCarreta" name="placaCarreta" className={inputStyles} type="text" />
              </div>

              <div className="flex-1">
                <label htmlFor="rota" className={labelStyles}>Rota:</label>
                <input id="rota" name="rota" className={inputStyles} type="text" />
              </div>

              <div className="flex-1">
                <label htmlFor="previsao" className={labelStyles}>Previsão.:</label>
                <input id="previsao" name="previsao" className={inputStyles} type="text" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="lacre" className={labelStyles}>Lacre:</label>
                <input id="lacre" name="lacre" className={inputStyles} type="text" />
              </div>

              <div className="flex-1">
                <label htmlFor="liberacao" className={labelStyles}>Liberação:</label>
                <input id="liberacao" name="liberacao" className={inputStyles} type="text" />
              </div>

              <div className="flex-1">
                <label htmlFor="averbacao" className={labelStyles}>Averbação.:</label>
                <input id="averbacao" name="averbacao" className={inputStyles} type="text" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="chaveNFe" className={labelStyles}>Chave NFe:</label>
                <input id="chaveNFe" name="chaveNFe" className={inputStyles} type="text" />
              </div>
              
              <div className="flex-1">
                <label htmlFor="chaveCTe" className={labelStyles}>Chave CTe.:</label>
                <input id="chaveCTe" name="chaveCTe" className={inputStyles} type="text" />
              </div>
              
              <div className="flex-1">
                <label htmlFor="status" className={labelStyles}>Status:</label>
                <input id="status" name="status" className={inputStyles} type="text" />
              </div>
            </div>

            <label htmlFor="observacoes" className={labelStyles}>Observações:</label>
            <input id="observacoes" name="observacoes" className={inputStyles} type="text" />

            <button type="submit" className={buttonStyles}>Enviar</button>
          </form>
        </div>
      </main>
    </>
  )
}
