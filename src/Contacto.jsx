import { NUMERO_WHATSAPP } from './config'

function Contacto() {
  return (
    <section className="contacto">
      <h2>Sobre nosotros</h2>
      <p>Hacemos mermeladas artesanales con fruta fresca y sin conservantes.</p>

      <h2>Contacto</h2>
      <p>Ubicación: Bogotá, Colombia</p>
      <p>Horario: lunes a sábado, 8 a.m. a 6 p.m.</p>
      <p>
        <a href={`https://wa.me/${NUMERO_WHATSAPP}`} target="_blank" rel="noreferrer">
          Escríbenos por WhatsApp
        </a>
      </p>
      <p>
        <a href="https://instagram.com/tu_usuario" target="_blank" rel="noreferrer">
          Síguenos en Instagram
        </a>
      </p>
    </section>
  )
}

export default Contacto