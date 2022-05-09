import logo from './logo.svg';
import './App.css';
import products from './products'

function Product(props){
  return(
    <div>
      <img className="product-image" src={props.image}></img>
      <h3>{props.name}</h3>
      <h5>${props.price}</h5>
    </div>
  )
}

function App() {
  const productsList = products.map(item => <Product {...item}/>)
  return (
    <div className="App">
      <header className="App-header">
        <h1>RoboShop</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          All your robot needs in one place
        </p>
        <div className="product-list">
          {productsList}
        </div>
      </header>
    </div>
  );
}

export default App;
