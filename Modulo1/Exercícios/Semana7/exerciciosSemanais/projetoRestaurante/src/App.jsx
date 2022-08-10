import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Rodape } from './components/Rodape/Rodape';
import { Titulo } from './components/Titulo/Titulo';

function App() {
  return (
    <div>
      <Navbar />
      <Titulo />
      <Rodape />
    </div>
  )
}

export default App
