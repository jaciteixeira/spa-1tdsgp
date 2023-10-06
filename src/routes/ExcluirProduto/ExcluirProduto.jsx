import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ExcluirProduto.scss";

export default function ExcluirProduto() {
  document.title = "Excluir Produto";

  const { id } = useParams();

  const navigate = useNavigate()

  const handleExcluir = () =>{

    fetch(`http://localhost:5000/produtos/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type":"application/json"
      },
    })
    .then((response)=> console.log(response.status))
    .catch(error=> console.log(error));

    navigate("/produtos");

  }

  const [produto, setProduto] = useState({});

  useEffect(() => {

    fetch(`http://localhost:5000/produtos/${id}`)
      .then(response=> response.json())
      .then(response=>setProduto(response))
      .catch(error=>console.log(error));

  }, [id])
  
  return (
    <>
      <h1 className="titExcluir">Excluir - Produto</h1>
      <h2>{`Deseja realmente excluir o produto?`}</h2>
      <div className="card">
        <div className="cardProduto">
          <img src={produto.img} alt={produto.desc} />
          <p><span className="subTxt">Nome:</span> {produto.nome}</p>
          <p><span className="subTxt">Descrição:</span> {produto.desc}</p>
          <p><span className="subTxt">Valor: R$ </span>{produto.preco}</p>
          <button onClick={handleExcluir}>EXCLUIR</button>
          <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
        </div>
      </div>
    </>
  );
}


// import { ListaProdutos } from "../components/ListaProdutos";
// import { useState } from "react";
  // const produtoObj = ListaProdutos.filter((item) => item.id == id)[0];
 
  // const [produto] = useState(produtoObj);

  // const handleDelete = () => {
  //   //Índice que será utilizado para a exclusãoo do produto na lista.
  //   let indice;

  //   //Localização do índice na lista.
  //   ListaProdutos.forEach((item, index) => {
  //     if (item.id == produto.id) {
  //       indice = index;
  //     }
  //   });

  //   //Excluindo o produto da lista com splice();
  //   ListaProdutos.splice(indice,1);
  //   alert("O produto foi excluído com Sucesso!");
  //   //Redirecionando o usuário para a lista de produtos:
  //   navigate("/produtos");
  // };