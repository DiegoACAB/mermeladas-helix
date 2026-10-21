import './App.css'
import TarjetaMermelada from './TarjetaMermelada'
import Contacto from './Contacto'

const mermeladas = [
  { id: 1, sabor: 'Fresa', descripcion: 'Dulce y natural', precio: 15000 },
  { id: 2, sabor: 'Mora', descripcion: 'Un toque ácido', precio: 16000 },
  { id: 3, sabor: 'Piña', descripcion: 'Tropical y suave', precio: 14000 },
  { id: 4, sabor: 'Mango', descripcion: 'Dulce y cremosa', precio: 15000 },
]

function App() {
  return (
    <div className="pagina">
      <header className="encabezado">
        <h1>Mermeladas Helix</h1>
        <p>Mermeladas artesanales hechas a mano</p>
      </header>

      <div className="catalogo">
        {mermeladas.map((mermelada) => (
          <TarjetaMermelada
            key={mermelada.id}
            sabor={mermelada.sabor}
            descripcion={mermelada.descripcion}
            precio={mermelada.precio}
          />
        ))}
      </div>

      <Contacto />
    </div>
  )
}

export default App