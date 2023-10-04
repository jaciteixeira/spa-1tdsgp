import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape";
import style from "./App.module.css";

export default function App() {

  return (
    <>
    <div className="container">
        <Cabecalho className={style.container}/>
        <Outlet/>
        <Rodape/>
    </div>
    </>
  )

}
