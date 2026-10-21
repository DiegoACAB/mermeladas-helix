import { NUMERO_WHATSAPP } from './config'

function TarjetaMermelada(props) {
  const mensaje = `Hola, quiero pedir la mermelada de ${props.sabor}`
  const link = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`

  return (
    <div className="tarjeta">
      <h2>{props.sabor}</h2>
      <p>{props.descripcion}</p>
      <p>${props.precio}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Pedir por WhatsApp
      </a>
    </div>
  )
}

export default TarjetaMermelada