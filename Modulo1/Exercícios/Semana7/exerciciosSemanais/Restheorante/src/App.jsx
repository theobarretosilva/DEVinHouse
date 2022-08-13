import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Rodape } from './components/Rodape/Rodape';
import { Secoes } from './components/Secoes/Secoes';

function App() {
  return (
    <div className='divPrincipal'>
      <Navbar />
      <Secoes 
        entradas = "Entradas"
        saladas = "Saladas"
        pratosPrincipais = "Pratos principais"
        sobremesas = "Sobremesas"
        bebidas = "Bebidas"
        />
      <Rodape />
    </div>
  )
}

export default App