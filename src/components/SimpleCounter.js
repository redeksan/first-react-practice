import { useState , useEffect} from "react";
import { Dropdown } from "./Dropsdown";

export const SimpleCounter = function(){

    // const [currecyData , setCurrencyData] = useState({})
    

    // const gettingData = async function (){
    //     const response = await fetch('http://data.fixer.io/api/latest?access_key=416b9d4a8622014b57c02f65f6738909')
    //     const data = await response.json()
    //     // console.log(Object.keys(data.rates))
    //     const {rates} = data
    //     setCurrencyData(rates)
    //     console.log(currecyData)
    //     for (const [key, value] of Object.entries(rates)) {
            
    //       }
          
        
    //   }

    //   useEffect(()=> {
    //     gettingData()
    // }, [])

    const [counter, setCounter] = useState(0)

    

 
    


    const updateCounter = function (counterAdjustment){
        setCounter( (counter) => counter + counterAdjustment > 0 ? counter + counterAdjustment : 0)
    }

    const resetCounter = function (){

        setCounter(()=>0)
    }
    var test = counter
    console.log(test)
    return (
        <div>
            
            {/* <span>{counter}</span> */}
            <button onClick={() => updateCounter(10)}>Plus 10</button>
            <button onClick={() => updateCounter(1)}>Plus</button>
            <button onClick={() => resetCounter()}>Reset</button>
            <button onClick={() => updateCounter(-1)}>Minus</button>
            <button onClick={() => updateCounter(-10)}>Minus 10</button>
            <h1>{counter}</h1>
            <Dropdown counter={test}/>
        </div>
    )
}

export default SimpleCounter