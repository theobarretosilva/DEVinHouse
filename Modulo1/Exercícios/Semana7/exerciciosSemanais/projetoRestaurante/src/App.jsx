import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Rodape } from './components/Rodape/Rodape';
import { Secoes } from './components/Secoes/Secoes';

function App() {
  return (
    <div className='divPrincipal'>
      <Navbar />
      <Secoes />
      <Rodape />
    </div>
  )
}

export default App