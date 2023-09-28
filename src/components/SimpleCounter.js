

export const SimpleCounter = function(props){

       
    return ( 
        <div>
            
            {/* <span>{counter}</span> */}
            <button onClick={() => props.updateCounter(10)}>Plus 10</button>
            <button onClick={() => props.updateCounter(1)}>Plus</button>
            <button onClick={() => props.resetCounter()}>Reset</button>
            <button onClick={() => props.updateCounter(-1)}>Minus</button>
            <button onClick={() => props.updateCounter(-10)}>Minus 10</button>
            <h1>{props.counter}</h1>
        </div>
    )
}

export default SimpleCounter