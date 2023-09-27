import { useState,useEffect } from "react"
import SimpleCounter from "./SimpleCounter"

export const Dropdown = (props)=>{

const [currecyData , setCurrencyData] = useState([])
const [currecyDataRate , setCurrencyDataRate] = useState([])
const [value, setValue] = useState('');
const [value2, setValue2] = useState('');



const handleChange = (event) => {

  setValue(+(event.target.value))
  console.log(event.target.value);
  

};
const handleChange2 = (event) => {

    setValue2(+(event.target.value));
  
  };
    

    const gettingData = async function (){
        const response = await fetch('http://data.fixer.io/api/latest?access_key=416b9d4a8622014b57c02f65f6738909')
        const data = await response.json()
        // console.log(Object.keys(data.rates))
        const {rates} = data
        var allCurreny = []
      
        for (const [key, value] of Object.entries(rates)) {
            allCurreny.push(key)    
            setCurrencyData(prev => [...prev,[key, value]])    
        }
      
        for (const curreny of allCurreny){
            // setCurrencyData(prev => [...prev,curreny])
            
      }
    }

      useEffect(()=> {
        gettingData()
    }, [])

    let countervalue=props.counter
    
    return (
        <>
            
            <select value={value} onChange={handleChange}>
                {currecyData.map((e, i)=> <option  value={e[1]} key={i}>{e[0]}</option>)}       
            </select>
            <select value2={value2} onChange={handleChange2}>
                {currecyData.map((e, i)=> <option  value={e[1]} key={i}>{e[0]}</option>)}       
            </select>
            {/* <h1>{value2} ...  </h1>
            <h1>{value} </h1> */}
            <h1>{countervalue / value * value2 }        </h1>
            
        </>
        
        )
}