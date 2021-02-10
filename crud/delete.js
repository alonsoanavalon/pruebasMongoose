require('../connection')

const User = require('../models/User')

const deleteUser = async () => {

    const deletedUser = await User.findOneAndDelete({"username":"pancho"})
    console.log(deletedUser)


}

deleteUser();