var rates
var sBoxController

//Entry point
window.onload = function () {
  rates = new currencyRate('USD', 'SEK')
  sBoxController = new salaryBoxController(
    [
      new salaryBox('YearSEK',  0, YS => YS / 12),
      new salaryBox('MonthSEK', 0, MS => MS * rates.SEKtoUSD),
      new salaryBox('MonthUSD', 0, MU => MU * 12),
      new salaryBox('YearUSD',  0, YU => YU * rates.USDtoSEK)
    ]
  )
  refreshScreen()
}

function refreshScreen () {
  element('SEKRate').innerHTML = `🇸🇪 <span style="font-size:18px">= ${rates.SEKtoUSD} USD</span>`
  element('USDRate').innerHTML = `🇺🇸 <span style="font-size:18px">= ${rates.USDtoSEK} SEK</span>`

  sBoxController.salaryBoxes.getAll().forEach(sBox => {
    sBox.element.value = parseInt(sBox.value);
  });
}

function element (name) {
  return document.getElementById(name)
}

function prettyPrint(num){
  return format(presicion(num, "FULL"), "SWE")
}

function format(num, format){
  leftSideBackwards = parseInt(num).toString().split("").reverse();
  
  formatted = []
  for (let i = 0; i < leftSideBackwards.length; i++){
    formatted.push(leftSideBackwards[i]);

    if(i%3 == 2){
      formatted.push(" ");
    }
  }

  return formatted;
  
}

function presicion(num, presicion){

}
