import { useState, useEffect } from "react"


export function useCurrencyData(){

const URL = 'http://data.fixer.io/api/latest?access_key=416b9d4a8622014b57c02f65f6738909'

const [currecyData , setCurrencyData] = useState([["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0", '']])



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

return {currecyData}
}