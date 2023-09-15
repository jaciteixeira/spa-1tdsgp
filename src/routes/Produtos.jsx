import { useEffect, useState } from "react";
import { AiOutlineEdit as Editar, AiOutlineDelete as Excluir } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Produtos.module.css";


export default function Produtos() {

    const [counter, setCounter] = useState(0)

    const [novaListaProdutos, setNovaListaProdutos] = useState([{}]);

    const [counter2, setCounter2] = useState(0);

    useEffect(()=>{
        console.log("useEffect que renderiza sempre!")
    })

    useEffect(()=>{
        setNovaListaProdutos(ListaProdutos);
        console.log("useEffect que renderiza apenas uma vez!")
   
    },[ ])

    useEffect(() => {
        console.log("useEffect que renderiza apenas se o objeto/elemento/constante que está sendo monitorado no array de dependências sofrer atualização.");
    },[counter2]);

    return (
    <>
        <div>
            <h1>PRODUTOS</h1>

            <div>
                <button onClick={()=> setCounter(counter + 1)}>COUNTER - {counter}</button>
            </div>
            <div>
                <button onClick={()=> setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
            </div>

            <table className={classes.tabelaProd}>
                <thead>
                    <tr>
                        <th className={classes.tabelaCabecalho}>ID</th>
                        <th className={classes.tabelaCabecalho}>NOME</th>
                        <th className={classes.tabelaCabecalho}>DESCRIÇÃO</th>
                        <th className={classes.tabelaCabecalho}>PREÇO</th>
                        <th className={classes.tabelaCabecalho}>IMG</th>
                        <th className={classes.tabelaCabecalho}><Editar/> / <Excluir/></th>

                    </tr>
                </thead>
                <tbody>
                    {novaListaProdutos.map( (produto, indice)=>(
                            <tr className={classes.tabelaLinha} key={indice}>
                                <td className={classes.tabelaDados}>{produto.id}</td>
                                <td className={classes.tabelaDados}>{produto.nome}</td>
                                <td className={classes.tabelaDados}>{produto.desc}</td>
                                <td className={classes.tabelaDados}>{produto.preco}</td>
                                <td className={classes.tabelaDados}><img className={classes.tblImg} src={`${produto.img}`} alt={`${produto.desc}`}/></td>
                                <td className={classes.tabelaDados}> <Link to={`/editar/produto/${produto.id}`}><Editar/></Link> / <Link to={`/excluir/produto/${produto.id}`}><Excluir/></Link> </td>
                            </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6}>PRODUTOS</td>
                    </tr>
                </tfoot>
            </table>

        </div>
    </>
  )
}
