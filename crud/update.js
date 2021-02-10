require ('../connection')

const User = require('../models/User');

async function updateUser () {

    const updatedUser = await User.update({"username":"keyzen"}, {$set:{"password":"nuevoPassword"}})

    return updatedUser


}


const otherFunction = async () => {
	
	const user = await User.findOneAndUpdate({"username":'keyzen'}, 
	{"name":'gordonKeyzen'}, {new:true}) 


	console.log(user)

}

/* updateUser()
.then(updatedUser => console.log(updatedUser))
.catch(err => console.log(err)) */

otherFunction()
