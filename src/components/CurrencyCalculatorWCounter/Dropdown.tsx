import { ChangeEvent } from "react";

type Props = {
    currencyNames : string[],
    setSelectedValue : (arg0: string) => void
}

export const Dropdown = (props :Props) =>{
    
    const handleChange = (event : ChangeEvent ) => {
        props.setSelectedValue((event.currentTarget as HTMLInputElement).value);
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