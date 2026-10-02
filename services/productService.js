const getProducts = require('../database/productsDB')

async function fetchProducts() {
    let products = await getProducts()
    return products
}
async function fetchProductsById(id) {
    let products = await getProducts()
    return products.find(product => product.id === id)
}

module.exports = { fetchProducts, fetchProductsById };