const fs = require('fs/promises')
const path = require('path')

const filepath = path.join(__dirname,'../db.json')

async function getProducts(){
    try {
        let data = await fs.readFile(filepath, 'utf-8');
        return JSON.parse(data);
        


    } catch (err) {
        console.log(err);
    }
}

async function createProducts(product){
    try{
        let data = await fs.readFile(filepath,'utf-8')
        const products = JSON.parse(data)

        products.push(product)

        await fs.writeFile(filepath,JSON.stringify(products,null,2))
        return product;
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getProducts,createProducts};
