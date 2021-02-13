const express = require('express')
const morgan = require('morgan')

const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('nombreSeteado', 'Alonso')


//AGREGAMOS CODE PARA QUE EL SERVER ENTIENDA JSON Y NO TIRE UNDEFINED
// MIDDLEWARE CREADO
function logger(req,res,next) {

    console.log('Request received ' + "protocolo "  +req.protocol + " host  " + req.hostname + "ruta usuario  "  + req.originalUrl)



    console.log('PASAMOS POR EL LOGGER')

    next()
}



/* middlewares */


app.use(express.json())

app.use(logger)

app.use(morgan('dev'))

app.all('/user', (req, res, next) => {

    console.log('Por aquí paso')
    next()

})

                /* comienzan rutas */



app.get('/', (req,res) => {
    const data = [{'nombre':'alonso'}, {'nombre':'melisa'}]
    res.render('index.ejs', {personas:data})
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




                /* Terminan rutas */

/* Middleware de staticFiles */

app.use(express.static('public'))



/* Status 404 */

app.use((req, res, next) => {
    res.status(404).send('Error 404 desde express')





/* Puerto escuchando */

})
app.listen(port , ()=> {

    console.log('Puerto escuchando')
})