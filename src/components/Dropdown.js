

export const Dropdown = (props) =>{
    
    const handleChange = (event) => {
        props.setSelectedValue(event.target.value);
      }

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