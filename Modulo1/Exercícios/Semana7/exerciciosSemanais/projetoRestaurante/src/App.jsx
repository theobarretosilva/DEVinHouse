import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Rodape } from './components/Rodape/Rodape';
import { Titulo } from './components/Titulo/Titulo';
import { Card } from './components/Card/Card';

function App() {
  return (
    <div id='divPrincipal'>
      <Navbar />
      <Titulo />
      <Card 
        card = {{
          img: 'https://www.dicasdemulher.com.br/wp-content/uploads/2021/05/entradas-para-jantar-00.png',
          descricaoImg: "Bruschetta de tomates confit",
          nomePrato: "Bruschetta de tomates confit",
          descricaoPrato: "Bruschetta de tomates confit com manjericões frescos",
          tempoPreparo: "Tempo de preparo: 15 minutos",
          preco: "R$ 24,90",
        }}
      />
      <Rodape />
    </div>
  )
}

export default App