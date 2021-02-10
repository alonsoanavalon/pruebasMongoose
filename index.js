require('./connection')
const Product = require('./models/Product')

const laptopSamsung = new Product({

    name:'laptop',
    description: 'samsung KN901',
    price:212
})

laptopSamsung.save((err, doc) => {
    if (err) console.log(err);
    console.log(doc)
})
