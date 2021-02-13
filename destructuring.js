const funcionesAritmeticas = {

    suma: (a,b) => {
        let result = a+b
        return result;
    },

    resta: (a,b) => {
        let result = a-b
        return result;
    },

    user: {
        nombre:"alonso",
        apellido:"anavalon"
    },

    numbers : [1,2,3,4,5]


}

const { suma, user, numbers } = funcionesAritmeticas;

console.log(numbers)