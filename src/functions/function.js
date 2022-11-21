
const consultarInformacionApi = async(setState) => {
  const url = "https://dragon-ball-super-api.herokuapp.com/api/characters"
  const resputaApiDatos = await fetch(url)
  const transformarDatosJson = await resputaApiDatos.json()

  setState(transformarDatosJson)
}

export {
  consultarInformacionApi
}