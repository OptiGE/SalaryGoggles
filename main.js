var rates
var sBoxController

window.onload = async function () {
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

function element (name) {
  return document.getElementById(name)
}

function refreshScreen () {
  element('SEKRate').innerHTML = `🇸🇪 <span style="font-size:18px">= ${rates.USDtoSEK} USD</span>`
  element('USDRate').innerHTML = `🇺🇸 <span style="font-size:18px">= ${rates.SEKtoUSD} SEK</span>`

  sBoxController.salaryBoxes.getAll().forEach(sBox => {
    sBox.element.value = sBox.value;
  });
}
