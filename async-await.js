require('./connection')

const Product = require('./models/Product')

async function main () {

    const productKeyboard = new Product ({

        name:'keyboard',
        description:'nice keyboard',
        price:10000
    
    })
    
    const productSaved = await productKeyboard.save();
    
    return productSaved
}

main()
 .then(productSaved => console.log(productSaved))
 .catch(err => console.log(err))