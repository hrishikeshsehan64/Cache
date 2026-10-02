const fs = require('fs/promises')
const path = require('path')

const filepath = path.join(__dirname,'../db.json')

async function getProducts(){
    try{const data = await fs.readFile(filepath,'utf-8');
    return JSON.parse(data)
}
    catch(err){
        console.log(err)
    }
}

module.exports = getProducts;
