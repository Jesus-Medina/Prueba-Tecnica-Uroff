import SearchIcon from "../imgs/searchIcon.svg"
import "../stylesheets/SearchComponent.css"

function SearchComponent({busquedaPersonaje, setBusquedaPersonaje}) {
  return (
    <div className="search-container">
      <div className="search-icon-container">
        <input value={busquedaPersonaje} type="text" onChange={(e) => setBusquedaPersonaje(e.target.value)}></input>
        <img className="search-icon" src={SearchIcon} alt=""></img>
        <p>buscar por nombre</p>
      </div>
    </div>
  )
}

export default SearchComponent
