class allSalaries {
  constructor (salaries) {
    this.salaries = salaries
    this.addSalaryListeners()
  }

  updateSalaries (updatedSalary, index) {
    console.log(this.salaries)
    console.log(index)
    this.salaries[index].value = updatedSalary //

    // Circular loop
    const len = this.salaries.length
    console.log(len)
    console.log(index % len)
    for (let i = index; i < len + index; i++) {
      i = i % len
      console.log(this.salaries[i].name)
      this.salaries[i + 1].value = this.salaries[i].transferFunction(this.salaries[i].value)
    }
  }

  addSalaryListeners () {
    let index = 0
    this.salaries.forEach(salary => {
      document.getElementById(salary.name).addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
          event.preventDefault()
          salaries.updateSalaries(salary.element.innerHTML, index) //DEN TOLKAR INTE INDEX SOM EN SIFFRA
          refreshScreen()
        }
      })
      index++
    })
  }
}

class salary {
  constructor (name, value, transferFunction) {
    this.name = name
    this.value = value
    this.transferFunction = transferFunction
    this.element = document.getElementById(name)
  }
}
