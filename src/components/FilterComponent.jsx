import filterIcon from "../imgs/filterIcon.svg"
import "../stylesheets/FilterComponent.css"

function FilterComponent({ filtroUniverso, setFiltroUniverso, resultadoBusqueda }) {

  return (
    <div className="filter-container">
      <div
        className="filter-icon-container"
        onClick={(e) => {
          e.currentTarget.classList.toggle("filter-icon-container-expand")
          e.currentTarget.lastChild.classList.toggle("transicion")
          e.currentTarget.firstChild.classList.toggle("transicion-2")
          e.currentTarget.children[1].classList.toggle("selected-universe-opacity")
          e.currentTarget.children[2].classList.toggle("universe-list-show")
        }}
      >
        <img className="filter-icon" src={filterIcon} alt=""></img>
        <p className="selected-universe">Universo 1</p>
        <div className="universe-list">
          <ul>
            <li>Universo 1 (actual)</li>
            <li>Universo 2</li>
            <li>Universo 3</li>
            <li>Universo 4</li>
            <li>Universo 5</li>
            <li>Universo 6</li>
            <li>Universo 7</li>
            <li>Universo 8</li>
            <li>Universo 9</li>
            <li>Universo 10</li>
            <li>Universo 11</li>
            <li>Universo 12</li>
          </ul>
        </div>
        <p className="filter-title">Filtrar universos</p>
      </div>
    </div>
  )
}

export default FilterComponent