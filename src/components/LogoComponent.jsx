import React from "react";
import logo from "../imgs/logo.png"
import "../stylesheets/LogoComponent.css"

function LogoComponent() {
  return (
    <React.Fragment>
      <img className="box-2" src={logo} alt="logo de dragon ball"></img>
      <p className="box-2-texto">Prueba del Dragón</p>
    </React.Fragment>
  )
}

export default LogoComponent
