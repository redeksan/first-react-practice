import { useState, useEffect } from "react"


export function useCurrencyData(){

const URL = 'http://data.fixer.io/api/latest?access_key=416b9d4a8622014b57c02f65f6738909'

const [currecyData , setCurrencyData] = useState([["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0", '']])

const [counter, setCounter] = useState(0)

    function updateCounter (counterAdjustment){
        setCounter( (counter) => counter + counterAdjustment > 0 ? counter + counterAdjustment : 0)
        console.log(counter)
    }

    function resetCounter(){

        setCounter(()=>0)
    }

    const [result, setResult] = useState()
    const [firstDropdownRateValue, setFirstDropdownRateValue] = useState()
    const [secondDropdownRateValue, setSecondDropdownRateValue] = useState()
    
   
    
    const handleChange = (event) => {
      setFirstDropdownRateValue(event.target.value)
      setResult(0)
        
    }
    
    const handleChange2 = (event) => {
        setSecondDropdownRateValue(event.target.value)
        setResult(0)
    }
    
    const handleSubmit = () =>{
      setResult(counter / firstDropdownRateValue * secondDropdownRateValue)
      console.log(counter , firstDropdownRateValue , secondDropdownRateValue)
    }




const gettingData = async function (){
    const response = await fetch(URL)
    const data = await response.json()
    console.log('time of fetching ' , new Date(data.timestamp * 1000).toLocaleString())
    var allCurreny = []
  
    for (const [key, value] of Object.entries(data.rates)) {
        allCurreny.push(key)    
        setCurrencyData(prev => [...prev,[key, value]])    
    }
  
    
}


  useEffect(()=> {
    gettingData()
}, [])

return {currecyData, updateCounter, resetCounter, counter, handleChange, handleChange2, handleSubmit,setResult,result }
}