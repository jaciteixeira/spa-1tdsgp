// import React from 'react'

import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Conteudo from "./components/Conteudo";

export default function App() {

  //ÁREA DECLARATIVA
  let meuNome = "Jaci";


  return (
    <>
    {/* Área Imperativa */}
    <div className="container">

      <Cabecalho nomeDoUsuario={meuNome}>
        Hello World !!!
      </Cabecalho>
      
      <Conteudo/>

      <Rodape/>


    </div>

    </>
  )
}
