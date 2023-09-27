import { useEffect, useState } from "react";
import { AiOutlineEdit as Editar, AiOutlineDelete as Excluir } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Produtos.module.css";
import ModalExemplo from "../components/ModalExemplo/ModalExemplo";


export default function Produtos() {
    document.title = "Produtos";

    const [novaListaProdutos, setNovaListaProdutos] = useState([{}]); 

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) {
          //fetch = API do Javascript para realizar requisições/requests, ele utiliza como parâmetro uma URL ou URI.
          //fetch(http://minhaApi.com.br/exemplos)
          fetch("http://localhost:5000/produtos", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setNovaListaProdutos(data);
            })
            .catch((error) => console.log(error));
        }
      }, [open]);
    

    return (
    <>
        <div>
            <h1>PRODUTOS</h1>

            { open ? <ModalExemplo open={open} setOpen={setOpen}/> : "" }
            <Link onClick={()=> setOpen(true)}>Adicionar Produto</Link>

            <table className={classes.tabelaProd}>
                <thead className={classes.tabelaCabecalho}>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                        <th>IMG</th>
                        <th><Editar/> / <Excluir/></th>
                    </tr>
                </thead>
                <tbody className={classes.tabelaCorpo}>
                    {novaListaProdutos.map( (produto, indice)=>(
                        <tr key={indice}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.desc}</td>
                            <td>{produto.preco}</td>
                            <td>
                                <img className={classes.tblImg} 
                                src={`${produto.img}`} 
                                alt={`${produto.desc}`}/>
                            </td>
                            <td> 
                                {" "}
                                <Link to={`/editar/produto/${produto.id}`}>
                                    <Editar/>
                                </Link> {" "}
                                / {" "}
                                <Link to={`/excluir/produto/${produto.id}`}>
                                    <Excluir/>
                                </Link> {" "}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6}>
                            PRODUTOS INFORMÁTICOS - QTD = {novaListaProdutos.length}
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    </>
  );
}
