import './App.css';
import FinanceControl from './components/FinanceControl/FinanceControl';
import Header from './components/Header/Header';

function App() {
  const finances = () => {
    alert("Acionado")
  };
  return (
    <div>
      <Header />
      <FinanceControl alertFunction={finances}/>
    </div>
  );
}

export default App;