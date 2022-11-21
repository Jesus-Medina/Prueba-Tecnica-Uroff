import './App.css';
import { useEffect, useState } from "react";
import { consultarInformacionApi } from "./functions/function";
import CardComponent from "./components/CardComponent";
import SearchComponent from "./components/SearchComponent";
import FilterComponent from "./components/FilterComponent";
import HeaderComponent from "./components/HeaderComponent";
import LogoComponent from "./components/LogoComponent";

function App() {

  const [personajesDragonBall, setpersonajesDragonBall] = useState(null)
  const [busquedaPersonaje, setBusquedaPersonaje] = useState("")

  useEffect(() => {
    consultarInformacionApi(setpersonajesDragonBall)
  }, [])

  const resultadosBusqueda = busquedaPersonaje !== ""
    ? //true
    personajesDragonBall.filter((personaje) => personaje.name.toLowerCase().includes(busquedaPersonaje.toLocaleLowerCase()))
    
    : //false 
    personajesDragonBall

  return (
    <div className="App">
      <div className="main-container">
        <HeaderComponent />
        <SearchComponent busquedaPersonaje={busquedaPersonaje} setBusquedaPersonaje={setBusquedaPersonaje} />
        <FilterComponent />
        <LogoComponent />
        <CardComponent resultadosBusqueda={resultadosBusqueda} />
      </div>
    </div>
  );
}

export default App;
