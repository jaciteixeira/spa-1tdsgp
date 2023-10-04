import { Link } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho(){

    return(
        <>
            <header className="cabecalho">
                <h1>Vite + React</h1>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/produtos">PRODUTOS</Link></li>
                </ul>
            </header>

        </>
    )
}