class ProductManager {
    constructor(path) {
      this.path = path;
      this.products = this.readFile();
    }

    
getProductsById (id){
    let listaProductos = this.readFile();
    const products = listaProductos

  const search = products.find(product => product.id === id) 

if (search == undefined) {
  console.log( "Producto no encontrado")
}
else {

  return search 
}
}

isInProducts  (title)  {
    products.find (prod => prod.title === title)
}

readFile() {

    try {
    
    const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
    
    return data;
    
    } catch (error) {
    
    return []
    
    }
    
    }

}

const newProd = new ProductManager('productos.JSON');

newProd.addProducts({
    title: "Hamburguesa Hispter",
    description: "comida gourmet especial",
    price: 3500,
    thumbnail: "aquí va una ruta de imagen",
    code: 200,
    stock: 10,
}) 

newProd.addProducts({
title: "Sandwich especial",
description: "desayuno brunch",
price: 1500,
thumbnail: "aquí va una ruta de imagen",
code: 300,
stock: 20,
}) 

newProd.updateProduct(1,{
title: "Pizza Vegetariana",
description: "Pizza ingredientes vegtariana",
price: 5000,
thumbnail: "aquí va una ruta de imagen",
code: 007,
stock: 25,
}) 


console.log(newProd.getProducts());


