var SEKtoUSD = 0
var USDtoSEK = 0

function updateCurrencyRates (fromCurrency, toCurrency) {
  const GETRequest = async () => {
    const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
    const json = await response.json() // extract JSON from the http response
    
    try{
        SEKtoUSD = parseInt(json["rates"]["SEK"])
    } catch(err){
        console.log(`Failed to convert json currency rate to int: ${json["rates"]["SEK"]}`);
        console.log(err)
    }
    USDtoSEK = 1/SEKtoUSD
  }
}

function refreshScreen(){
    
}