import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Rodape } from './components/Rodape/Rodape';
import { Card } from './components/Card/Card';
import { Secoes } from './components/Secoes/Secoes';

function App() {
  return (
    <div className='divPrincipal'>
      <Navbar />
      {/* <Card 
        card = {{
          img: 'https://www.dicasdemulher.com.br/wp-content/uploads/2021/05/entradas-para-jantar-00.png',
          descricaoImg: "Bruschetta de tomates confit",
          nomePrato: "Bruschetta de tomates confit",
          descricaoPrato: "Bruschetta de tomates confit com manjericões frescos",
          tempoPreparo: "Tempo de preparo: 15 minutos",
          preco: "R$ 24,90",
        }}
      /> */}
      <Secoes />
      <Rodape />
    </div>
  )
}

export default App