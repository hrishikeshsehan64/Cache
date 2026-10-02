const express = require('express')
const router = express.Router()
const { getProducts, getProductsById } = require('../controllers/productController')
const {cacheMiddleware,cacheMiddlewareForId} = require('../middleware/cache');

router.get('/', cacheMiddleware, getProducts)
router.get('/:id', cacheMiddlewareForId, getProductsById)

module.exports = router