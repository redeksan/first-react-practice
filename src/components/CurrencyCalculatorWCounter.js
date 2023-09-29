import { Dropdown } from "./Dropdown"
import { useState , useEffect } from "react"

const URL = 'https://api.apilayer.com/fixer/latest?'


export const CurrencyCalculatorWCounter = () => {
    
    const [counter, setCounter] = useState(0)
    const [currencyData, setCurrencyData] = useState()
    const [currencyNames, setCurrencyNames] = useState(['USD', 'EUR'])
    const [firstSelectedValue, setFirstSelectedValue] = useState()
    const [secondSelectedValue, setSecondSelectedValue] = useState()
    const [result, setResult] = useState()

    const gettingData = async() => {

        await fetch(URL, {headers:{"apikey": "eYPUhfzOKmtJku8WjHnGkbATlPxn7PoV"}})
            .then(response => response.json())
            .then(response =>  {setCurrencyNames(Object.keys(response.rates)) 
                return response    })
            .then(response => setCurrencyData(response.rates))
            .catch(error => console.log("error") + error)           
    }
    
    useEffect(()=> {
        gettingData()
    }, [])


    const updateCounter = (counterAdjustment) =>
    setCounter(currentCounter => currentCounter + counterAdjustment > 0 ? currentCounter + counterAdjustment : 0)
    const resetCounter = () => setCounter(0)

    const handleSubmit = () =>{
        setResult(counter / currencyData[firstSelectedValue] * currencyData[secondSelectedValue])
        console.log(counter , currencyData[firstSelectedValue] , currencyData[secondSelectedValue])
    }

    return (
        <div className="currency-calculator-box">
            <div className="counter-box">
                <div className="counter-box-buttons">
                    <button onClick={() => updateCounter(10)}>Plus 10</button>
                    <button onClick={() => updateCounter(1)}>Plus</button>
                    <button onClick={() => resetCounter()}>Reset</button>
                    <button onClick={() => updateCounter(-1)}>Minus</button>
                    <button onClick={() => updateCounter(-10)}>Minus 10</button>
                </div>
                <div className="counter-box-value">
                    <p>{counter}</p>
                </div>
            </div>
            <div className="dropdown-box">
                 <Dropdown currencyNames={currencyNames} setSelectedValue={setFirstSelectedValue}/> 
                 <Dropdown currencyNames={currencyNames} setSelectedValue={setSecondSelectedValue}/>   
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