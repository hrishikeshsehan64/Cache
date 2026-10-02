const { fetchProducts, fetchProductsById } = require('../services/productService');
const { setCache } = require('../middleware/cache');
async function getProducts(req, res) {
    try {
        const products = await fetchProducts()
        
        if (!products) {
            return res.status(404).json({
                message: "Products not found"
            });
        }

        else {
            setCache(req.url, products);
            return res.json(products)
        }
    }
    catch (err) {
        res.send(err)
    }

}
async function getProductsById(req, res) {
    try {
        const id = Number(req.params.id)
        const product = await fetchProductsById(id);
        
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        } else {

            setCache(`product_${id}`, product);
            return res.json(product)
        }
    }
    catch (err) {
        res.send(err)
    } 
}



module.exports = { getProducts, getProductsById }