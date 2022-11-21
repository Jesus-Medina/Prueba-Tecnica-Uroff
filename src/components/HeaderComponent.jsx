import header from "../imgs/header.png"
import "../stylesheets/HeaderComponent.css"

function HeaderComponent() {
  return (
    <div className="box-1-container">
      <img className="box-1" src={header} alt="foto de personajes de dragon ball"></img>
      <div className="box-1-background"></div>
    </div>
  )
}

export default HeaderComponent
