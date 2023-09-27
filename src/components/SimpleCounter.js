import { useState} from "react";

export const SimpleCounter = function(){

    const [counter, setCounter] = useState(0)

    const updateCounter = function (counterAdjustment){
        setCounter( (counter) => counter + counterAdjustment > 0 ? counter + counterAdjustment : 0)
    }

    const resetCounter = function (){
        setCounter(()=>0)
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => updateCounter(10)}>Plus 10</button>
            <button onClick={() => updateCounter(1)}>Plus</button>
            <button onClick={() => resetCounter()}>Reset</button>
            <button onClick={() => updateCounter(-1)}>Minus</button>
            <button onClick={() => updateCounter(-10)}>Minus 10</button>
        </div>
    )
}