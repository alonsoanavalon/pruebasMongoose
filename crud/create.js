require('../connection')

const User = require('../models/User')

async function createUser () {

    const nuevoUsuario = new User ({

        username:"pancho2",
        password:"12345",
        date: 123

    })

    const userSaved = await nuevoUsuario.save()

    return userSaved

}

createUser()
.then(userSaved => console.log(userSaved))
.catch(err => console.log(err))