class Auto {
  constructor(brend, model, color) {
    this.brendName = brend;
    this.model = model;
    this.color = color;
  }
 
  bipSygnal(song) {
    console.log(`Сигнал = ${song}`);
  }

  infoCar() {
    console.log(
      `Brend = ${this.brendName} \n  Model = ${this.model} \n Color = ${this.color}`
    );
  }
}

class Xmodel extends Auto {
  constructor(brend, model, color) {
    super(brend, model, color);
  }
    static engineCapacity = '3.0';
  checkSpare() {
    console.log(`Наявна запаска`);
  }
  checkEngineCapacity() {
    console.log(`Об’єм двигуна: ${Xmodel.engineCapacity}`);
  }

  infoCar() {
    super.infoCar();
    super.bipSygnal('Rammstein');
    this.checkSpare();
    this.checkEngineCapacity();
  }
}

let bmw = new Xmodel('BMW', 'X7', 'Black');
let audi = new Xmodel('Audi', 'A4', 'Black');
// beha.infoCar();
// bmw.checkEngineCapacity();
console.log('bmw.model', bmw.model);
console.log('bmw.engineCapacity', Xmodel.engineCapacity);
audi.checkEngineCapacity();
audi.infoCar();

