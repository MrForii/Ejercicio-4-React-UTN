import logo from './logo.svg';
import './App.css';
import Encuestas from './components/Encuestas';

function App() {

  const encuestas = [
    { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones:
    ['Rojo', 'Azul', 'Verde'] },
    { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
    ['Pizza', 'Hamburguesa', 'Sushi'] },
    ];
    
  return (
    <div className="App App-header">
      <h1 style={{fontSize: '40px', color: 'gray'}}>Aplicacion de Encuestas</h1>

      <Encuestas encuestas={encuestas} />
    </div>
  );
}

export default App;
