
import './App.css';

import { SimpleCounter } from './components/SimpleCounter';
import { Dropdown } from './components/Dropsdown';
import { useCurrencyData } from './hooks/currencyData';
import { ResultCurrency } from './components/ResultCurency';
 


function App() {
  const {currecyData, updateCounter, resetCounter, counter, handleChange, handleChange2, handleSubmit,setResult,result} = useCurrencyData()
  
  return (
    <div className="App">
      <SimpleCounter resetCounter={resetCounter} updateCounter={updateCounter} counter={counter} />
      <Dropdown currecyData={currecyData} handleChange={handleChange} handleChange2={handleChange2}  />
      <ResultCurrency handleSubmit={handleSubmit} setResult={setResult} result={result}/>
    </div>
  );
}

export default App;
