import { Dropdown } from "./Dropdown"
import { useState , useEffect } from "react"

const URL = 'https://api.apilayer.com/fixer/latest?'


export const CurrencyCalculatorWCounter = () => {
    
    // handeling counter
    const [counter, setCounter] = useState(0)

    const updateCounter = (counterAdjustment) =>
      setCounter(currentCounter => currentCounter + counterAdjustment > 0 ? currentCounter + counterAdjustment : 0)
    const resetCounter = () => setCounter(0)

    // extracting data from API
    const [currencyData, setCurrencyData] = useState({})
    
    const gettingData = async() => {

        await fetch(URL, {headers:{"apikey": "eYPUhfzOKmtJku8WjHnGkbATlPxn7PoV"}})
            .then(response => response.json())
            .then(response => setCurrencyData(response.rates))
            .catch(error => console.log("error") + error)           
    }
    
    useEffect(()=> {
        gettingData()
    }, [])

    // handeling dropdowns
    const [firstSelectedValue, setFirstSelectedValue] = useState()
    const [secondSelectedValue, setSecondSelectedValue] = useState()
     
    //  handeling results
    const [result, setResult] = useState()

    const handleSubmit = () =>{
        setResult(counter / currencyData[firstSelectedValue] * currencyData[secondSelectedValue])
        console.log(counter , currencyData[firstSelectedValue] , currencyData[secondSelectedValue])
      }

    // rendering
    return (
        <div className="currency-calculator-box">
            <div className="counter-box">
                <button onClick={() => updateCounter(10)}>Plus 10</button>
                <button onClick={() => updateCounter(1)}>Plus</button>
                <button onClick={() => resetCounter()}>Reset</button>
                <button onClick={() => updateCounter(-1)}>Minus</button>
                <button onClick={() => updateCounter(-10)}>Minus 10</button>
                <p>{counter}</p>
            </div>
            <div className="dropdown-box">
                 <Dropdown currencyNames={Object.keys(currencyData)} setSelectedValue={setFirstSelectedValue}/> 
                 <Dropdown currencyNames={Object.keys(currencyData)} setSelectedValue={setSecondSelectedValue}/>   
            </div>
            <div className="result-box">
                <button onClick={handleSubmit}>Submit</button>
                <p>
                    {Number.isFinite(result) & result !== 0 
                    ? Math.round(result * 1000) / 1000 
                    : 'submit currency and amount'} 
                </p>
            </div>
        </div>    
    )
}