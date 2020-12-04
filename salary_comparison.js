//Remember to cache these
var SEKtoUSD = 0
var USDtoSEK = 0


function updateCurrencyRates (fromCurrency="USD", toCurrency="SEK") {
  const GETRequest = async () => {
    const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
    raiseforstatus(response);
    const currencyJson = await response.json()
    updateCurrencies(currencyJson);
    refreshScreen();
  }
  
  GETRequest();
}

function updateCurrencies(currencyResponse){
  try{
      temp_SEKtoUSD = parseFloat(currencyResponse["rates"]["SEK"])
      temp_USDtoSEK = 1.0/temp_SEKtoUSD

      SEKtoUSD = temp_SEKtoUSD.toPrecision(5);
      USDtoSEK = temp_USDtoSEK.toPrecision(5);

  } catch(err){
      console.log(err)
      throw `Failed to convert json currency rate to int: ${currencyResponse["rates"]["SEK"]}`;
  }
}


function raiseforstatus(response){
  console.log(response);
  //throw not 200 OK
}

function refreshScreen(){
  document.getElementById("SEKRate").innerHTML = `🇸🇪 <span style="font-size:16px">= ${USDtoSEK} USD</span>`;
  document.getElementById("USDRate").innerHTML = `🇺🇸 <span style="font-size:16px">= ${SEKtoUSD} SEK</span>`;
}
