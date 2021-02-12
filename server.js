const express = require('express')

const app = express();
const port = 3000;

//AGREGAMOS CODE PARA QUE EL SERVER ENTIENDA JSON Y NO TIRE UNDEFINED

function logger(req,res,next) {

    console.log('Request received ' + "protocolo "  +req.protocol + " host  " + req.host + "ruta usuario  "  + req.originalUrl)

    console.log(req.params)

    console.log('PASAMOS POR EL LOGGER')

    next()
}


app.use(express.json())

app.use(logger)

app.all('/user', (req, res, next) => {

    console.log('Por aquí paso')
    next()

})


app.get('/', (req,res) => {
    res.json({
        name:"oscar"
    })
})



app.post('/user/:id/:pass', (req,res) => {

    //Objeto que se me da para poder ver los DATOS RECIBIDOS

    console.log(req.params)
    res.send('post desde user1')
})

app.delete('/api/:userId/:pass', (req,res) => {

    console.log(req.params)
    res.send('delete desde api' +  `${req.params.userId}`)
})





app.use((req, res, next) => {
    res.status(404).send('Error 404 desde express')
})

app.listen(port , ()=> {
    console.log('Puerto escuchando')
})