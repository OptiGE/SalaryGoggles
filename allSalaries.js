class salaryBoxController {
  constructor (salaryBoxList) {
    this.salaryBoxes.boxes = salaryBoxList
    this.addSalaryListeners()
  }
  
  salaryBoxes = {
    boxes: [],
    length(){
      return this.boxes.length;
    },
    get(index){
      return this.boxes[index % this.boxes.length];
    },
    getAll(){
      return this.boxes;
    },
    transferTo(box1, box2){
      box2.value = box1.transferFunction(box1.value);
    }
  }

  updateSalaries (updatedSalary, index) {
    this.salaryBoxes.get(index).value = updatedSalary;

    for (let i = 0; i < this.salaryBoxes.length(); i++) {
      let thisBox = this.salaryBoxes.get(index + i);
      let nextBox = this.salaryBoxes.get(index + i + 1);

      this.salaryBoxes.transferTo(thisBox, nextBox);
    }
  }

  addSalaryListeners () {
    let index = 0
    this.salaryBoxes.boxes.forEach(salaryBox => {
      let boxElement = document.getElementById(salaryBox.name);
      boxElement.index = index;
      boxElement.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
          event.preventDefault()
          alert(this.index);
          sBoxController.updateSalaries(boxElement.value, this.index) //DEN TOLKAR INTE INDEX SOM EN SIFFRA
          refreshScreen()
        }
      })
      index++
    })
  }
}

class salaryBox {
  constructor (name, value, transferFunction) {
    this.name = name
    this.value = value
    this.transferFunction = transferFunction
    this.element = document.getElementById(name)
  }
}
