require('../connection')

const User = require('../models/User');

async function getUser () {

    const users = await User.findOne({"username":"keyzen"})
    console.log(users)

}

getUser()