//Esto en java es para almacenar propiedades privadas.
const _private = new WeakMap();

//Clase libro con constructor por defecto y parametro
//La _ indica atributos privados

//Pilar fundamental aqui --> Encapsulamiento
class Book {
  constructor(title, author, price) {
    constructor = {
      _title: title,
      _author: _author,
      _price: price,
    };
    //esta linea transforma los atributos de la clase en privados
    _private.set(this, { properties });
  }

  get title() {
    //Getter para poder obtener el valor del titulo del libro
    return _private.get(this).properties["_title"];
  }
  set title(newTitle) {
    // seTTer modifica el valor del titulo del libro
    return (_private.set(this).properties["_title"] = newTitle);
  }
  get author() {
    return _private.get(this).properties["_author"];
  }
  set author(newAuthor) {
    return (_private.get(this).properties["_author"] = newAuthor);
  }
  get price() {
    return _private.get(this).properties["_price"];
  }
  set price(newPrice) {
    return (_private.get(this).properties["_price"] = newPrice);
  }

  getAllData() {
    console.log(
      `Titulo: ${this.title}, Autor: ${this.author}, Precio: ${this.precio}`
    );
  }
}

//Herencia
class Comic extends Book {
  constructor(title, author, precio) {
    super(title, author, precio);
    this.illustrator = this.illustrator;
  }
  addIllustrator(newIllustrator) {
    this.illustrator.push(newIllustrator);
  }
  getAllData() {
    super.getAllData();
    console.log(`Illustradores/as: ${this.illustrator}`);
  }
}

class shoppingCart{
    constructor(){
        this.products = []
    }
}