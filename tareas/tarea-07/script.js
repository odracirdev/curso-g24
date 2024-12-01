const products = [
  { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
  { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
  { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
  { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
  { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
  { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];

// Filtrar Productos con Descuento

const productsWithDiscount = products.filter((product) => product.discount > 0)

console.log(productsWithDiscount)

// Calcular el Precio Final con Descuento

const priceAfterDiscount = productsWithDiscount.map((product) => product.price - ((product.price * product.discount) / 100))

console.log(priceAfterDiscount)

// Identificar Productos con Stock Bajo

const lowStock = products.filter((product) => product.stock < 5 )

console.log(lowStock)

// Actualizar el Stock de un Producto

const productUpdate = (name, qty) => {
  try {
   const product = products.find(item => item.name.toLowerCase() === name.toLowerCase())
   if(!product) {
     throw new Error(`El producto "${name}" no se encuentra en la lista.`)
   }
   product.stock += qty
    console.log(`El stock del "${name}" se actualizó correctamente.\nNuevo stock: ${product.stock}`)
  } catch (error) {
    console.error(error.message)
  }
}

productUpdate("Televisor", 1000)
console.log(products)

// Resumen por categorías

const getCategorySummary = (products) => {
  const categorySummary = {}
  
  for(const product of products) {
    if(!categorySummary[product.category]) {
      categorySummary[product.category] = 0
    }
    
    categorySummary[product.category]++
  }
  
  return categorySummary;
}

console.log(getCategorySummary(products))