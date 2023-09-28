


export const ResultCurrency = function(props){
    return(
        <>
            <button onClick={props.handleSubmit}>Submit</button>
            <h1>{Number.isFinite(props.result) & props.result !== 0 ? Math.round(props.result * 1000) / 1000 : 'submit currency and amount'} </h1>
        </>
    )
}