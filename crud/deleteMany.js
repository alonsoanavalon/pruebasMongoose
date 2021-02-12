require('../connection')

const User = require('../models/User')

const deleteUser = async () => {

    const deletedUser = await User.deleteMany({"username":"pancho"})
    console.log(deletedUser)


}

deleteUser();