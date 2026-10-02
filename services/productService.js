const {getProducts,createProducts} = require('../database/productsDB')

async function fetchProducts() {
    let products = await getProducts()
    return products
}
async function fetchProductsById(id) {
    let products = await getProducts()
    return products.find(product => product.id === id)
}

async function addNewProduct(){
    let newProduct = await createProducts()
    return newProduct
}

module.exports = { fetchProducts, fetchProductsById, addNewProduct };