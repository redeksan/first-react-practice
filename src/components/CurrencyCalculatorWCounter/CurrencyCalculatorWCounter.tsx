import { Dropdown } from './Dropdown'
import { useState, useEffect } from 'react'
import '../../styles/CurrencyCalculatorWCounter.css'

const URL = 'data/currencyAPI.json'

interface CurrencyCalculatorWCounterProps {
  setUsetNickname: React.Dispatch<React.SetStateAction<string>>
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const CurrencyCalculatorWCounter = (
  props: CurrencyCalculatorWCounterProps
) => {
  const [counter, setCounter] = useState(0)
  const [currencyData, setCurrencyData] = useState()
  const [currencyNames, setCurrencyNames] = useState(['USD', 'EUR'])
  const [firstSelectedValue, setFirstSelectedValue] = useState('USD')
  const [secondSelectedValue, setSecondSelectedValue] = useState('USD')
  const [result, setResult] = useState('submit currency and amount')

  const gettingData = async () => {
    await fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        setCurrencyNames(Object.keys(response.rates))
        return response
      })
      .then((response) => setCurrencyData(response.rates))
      .catch((error) => console.log('error') + error)
  }

  useEffect(() => {
    gettingData()
  }, [])

  const updateCounter = (counterAdjustment: number) =>
    setCounter((currentCounter) =>
      currentCounter + counterAdjustment > 0
        ? currentCounter + counterAdjustment
        : 0
    )
  const resetCounter = () => setCounter(0)

  const handleSubmit = () => {
    if (currencyData !== undefined) {
      const calculationResult =
        (counter / currencyData[firstSelectedValue]) *
        currencyData[secondSelectedValue]
      const displayResult =
        Number.isFinite(calculationResult) && calculationResult !== 0
          ? Math.round(calculationResult * 1000) / 1000
          : 'submit currency and amount'
      setResult(displayResult.toString())
      // console.log(counter , currencyData[firstSelectedValue] , currencyData[secondSelectedValue], calculationResult,displayResult)
    } else console.log('We fucked up =(')
  }
  const handleLogout = () => {
    props.setUsetNickname('')
    props.setIsLogedIn(false)
  }
  return (
    <div className="currency-calculator-box">
      <div className="currency-calculator-header">
        <h2>Currency calculator</h2>
      </div>
      <div className="counter-box">
        <div className="counter-box-value">
          <h4>{counter}</h4>
        </div>
        <div className="counter-box-header">
          <h4>Select amount</h4>
        </div>
        <div className="counter-buttons-box">
          <button onClick={() => updateCounter(10)}>+ 10</button>
          <button onClick={() => updateCounter(1)}>+</button>
          <button onClick={() => resetCounter()}>Reset</button>
          <button onClick={() => updateCounter(-1)}>-</button>
          <button onClick={() => updateCounter(-10)}>- 10</button>
        </div>
      </div>
      <div className="dropdown-box">
        <div className="dropdown-box-header">
          <h4>Select currency</h4>
        </div>
        <Dropdown
          currencyNames={currencyNames}
          setSelectedValue={setFirstSelectedValue}
        />
        <Dropdown
          currencyNames={currencyNames}
          setSelectedValue={setSecondSelectedValue}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="result-box">
        <h2>{result}</h2>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
