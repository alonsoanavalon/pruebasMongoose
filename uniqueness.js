require('./connection');
const User = require('./models/User')

async function main () {

    const userKeyzen = new User ({
    
        username:'keyzAn',
        password:'asdasd',
        date:123
    
    })
    
    const userSaved = await userKeyzen.save()

    return userSaved


}

main()
 .then(productSaved => console.log(productSaved))
 .catch(err => console.log(err))
