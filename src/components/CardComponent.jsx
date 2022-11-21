import "../stylesheets/CardComponent.css"

function CardComponent({resultadosBusqueda}) {
  return (
    <div className="box-3">
      {
        resultadosBusqueda !== null
          ? //true
          resultadosBusqueda.map((personaje, cantidadDePersonajes) =>
            cantidadDePersonajes < 12 && (
              <div className="character-card" key={personaje.id}>
                <div className="card-background"></div>
                <div className="card-background-hover"></div>
                <p className="card-character-name">{personaje.name}</p>
                <p className="card-character-universe">Universo {personaje.universe}</p>
                <div className="character-image-container">
                  <img className="character-image" src={personaje.imageUrl} alt={`ilustracion del personaje ${personaje.name}`}></img>
                </div>
                <button>Ver ficha</button>
              </div>
            )
          )
          : //false 
          <div className="screen-load-container">
            <p>Cargando personajes{ }</p>
            <img src="https://web.archive.org/web/20090830221257/http://geocities.com/katz_6988/gokuflying.gif" alt="gif de goku volando"></img>
          </div>
      }
    </div>
  )
}

export default CardComponent
