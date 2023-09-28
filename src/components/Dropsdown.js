


export const Dropdown = (props)=>{


    
    return (
        <>
            <select onChange={props.handleChange}>
              {props.currecyData.map((e, i)=> 
                <option  value={e[1]} key={i}>{e[0]}</option>)}       
            </select>
            <select onChange={props.handleChange2}>
              {props.currecyData.map((el, i)=> 
                <option  value={el[1]} key={i}>{el[0]}</option>)}       
            </select>
           
        </>
        
        )
}