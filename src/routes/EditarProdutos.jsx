import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Recuperando o id do produto com o HOOK useParam();
  const {id} = useParams();

    //Utilizando o filter na Lista de Produtos para recuperar um produto através do id como parâmetro.
    // const prodRecuperadoPorId = ListaProdutos.filter( (produto) => {
    //     if(produto.id == id){
    //       return produto;
    //     }
    // });

    const prodRecuperadoPorId = ListaProdutos.filter(produto => produto.id == id);

    const[produto,setProduto] = useState({
      id: prodRecuperadoPorId[0].id,
      nome: prodRecuperadoPorId[0].nome,
      preco: prodRecuperadoPorId[0].preco,
      desc: prodRecuperadoPorId[0].desc,
      img: prodRecuperadoPorId[0].img
    });

    const handlerEditarProduto = (event) => {
      event.preventDefault();
    }

  return (
    <>
        <div>
            <h1>EDITAR-PRODUTOS</h1>
            <form action="#" method="get">
              <fieldset>
                <legend>EDITAR PRODUTO</legend>
                <div>
                <label htmlFor="idProduto">Nome Produto:</label>
                  <input type="text" name="nome" id="idProduto" defaultValue={produto.nome} onChange={handlerEditarProduto}/>
                </div>
                <div>
                  <label htmlFor="idPreco">Preço Produto:</label>
                  <input type="text" name="nome" id="idProduto" defaultValue={produto.nome} onChange={handlerEditarProduto} />
                </div>
                
                <div>
                  <button>EDITAR</button>
                </div>
              </fieldset>
            </form>
            <p>NOME: - {prodRecuperadoPorId[0].nome}</p>
            <p>PREÇO: - {prodRecuperadoPorId[0].preco}</p>
        </div>
    </>
  )
}
