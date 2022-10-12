import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [pizzas, setPizzas] = useState([])

  const [nomeCliente, setNomeCliente] = useState("");
  const [cpfCliente, setCpfCliente] = useState("");
  const [enderecoCliente, setEnderecoCliente] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [observacao, setObservacao] = useState("");
  const [pedido, setPedido] = useState("");


  const handleGetPizzas = () => {
    fetch('http://localhost:3333/pizzas')
      .then(async response => {
        const data = await response.json()
        setPizzas(data)
      })
  }

  const handleSubmitPizzas = (event) => {
    event.preventDefault();

    fetch('http://localhost:3333/pizzas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nome,
        url: link,
        description: descricao,
        price: preco,
        ingredients: ingredientes
      })
    })
  }

  useEffect(()=> {
    handleGetPizzas()
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Cadastrar uma nova pizza</h1>
        <form onSubmit={handleSubmitPizzas}>
          <div>
            <label htmlFor="nomePizza">Nome da pizza</label>
            <input value={nome} onChange={(e)=> setNome(e.target.value)} type="text" id='nomePizza' required/>
          </div>
          <div>
            <label htmlFor="urlPizza">Url da foto da pizza</label>
            <input value={link} onChange={(e)=> setLink(e.target.value)} type="url" id='urlPizza' required/>
          </div>
          <div>
            <label htmlFor="descriptionPizza">Descrição da pizza</label>
            <input value={descricao} onChange={(e)=> setDescricao(e.target.value)} type="text" id='descriptionPizza' required/>
          </div>
          <div>
            <label htmlFor="pricePizza">Preço da pizza</label>
            <input value={preco} onChange={(e)=> setPreco(e.target.value)} type="text" id='pricePizza' required/>
          </div>
          <div>
            <label htmlFor="ingredientsPizza">Ingredientes da pizza</label>
            <textarea value={ingredientes} onChange={(e)=> setIngredientes(e.target.value)} name="ingredientsPizza" id="ingredientsPizza" cols="30" rows="10"></textarea>
          </div>
          <button>Mandar pizza</button>
        </form>
        <section>
          {pizzas.map(pizza => (
            <div key={pizza.id}>
              <img src={pizza.url} width="30px" height="30px" alt={pizza.name} />
              {pizza.name}
            </div>
          ))}
        </section>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App