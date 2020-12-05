let rates
let salaries

window.onload = async function () {
  rates = new currencyRate('USD', 'SEK')

  salaries = new allSalaries(
    [
      new salary('YearSEK', 0, YS => YS / 12),
      new salary('MonthSEK', 0, MS => MS * SEKtoUSD),
      new salary('MonthUSD', 0, MU => MU * 12),
      new salary('YearUSD', 0, YU => YU * USDtoSEK)
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
}
