import { useState } from "react"
import { useCurrencyData } from "../hooks/currencyData"


export const Dropdown = (props)=>{

const [result, setResult] = useState()
const [firstDropdownRateValue, setFirstDropdownRateValue] = useState()
const [secondDropdownRateValue, setSecondDropdownRateValue] = useState()

const {currecyData} = useCurrencyData()

const handleChange = (event) => {
  setFirstDropdownRateValue(event.target.value)
    
}

const handleChange2 = (event) => {
    setSecondDropdownRateValue(event.target.value)
}

const handleSubmit = () =>{
  setResult(props.counter / firstDropdownRateValue * secondDropdownRateValue)
}
    
    return (
        <>
            <select onChange={handleChange}>
              {currecyData.map((e, i)=> 
                <option  value={e[1]} key={i}>{e[0]}</option>)}       
            </select>
            <select onChange={handleChange2}>
              {currecyData.map((el, i)=> 
                <option  value={el[1]} key={i}>{el[0]}</option>)}       
            </select>
            <button onClick={handleSubmit}>Submit</button>
            <h1>{Number.isFinite(result) & result !== 0 ? Math.round(result * 1000) / 1000 : 'submit currency and amount'} </h1>
            
        </>
        
        )
}