import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss"

export default function Cabecalho(){

    const rotaAtual = useLocation();

    return(
        <>
            <header className="cabecalho">
                <ul>
                    <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>HOME</Link></li>
                    <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>PRODUTOS</Link></li>
                </ul>
            </header>

        </>
    )
}