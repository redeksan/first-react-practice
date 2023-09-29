

export const Dropdown = (props) =>{
    
    const handleChange = (event) => {
        props.setSelectedValue(event.target.value);
      }
    console.log(props.currencyNames)
    return(
        <select onChange={handleChange}>
            {props.currencyNames.map(currency => 
                <option key={currency}>
                    {currency}
                </option>)
            }    
        </select>
    )

}