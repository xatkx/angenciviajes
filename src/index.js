
import Express from "express";
import router from "./router/router.js"; // inport el router
import path from 'node:path'
import { db } from "./config/db.js";

// var global
const date = new Date() 
const _dirname = path.resolve() // addres path
const port = process.env.PORT || 1515; // port
const host = process.env.HOST || '0.0.0.0'

// contect database

const connnetDB = async () => {
    try {
        db.authenticate()

        console.log('authenticate: success')
    } catch (err) {console.log('authenticate: failure')}
}
// connnetDB()

// init express
const app = Express()

// midle wares
app.use((request, response, next) => { // get year
    response.locals.year = date.getFullYear()
    response.locals.title = 'Agencia de viajes'
    return next()
})



// static file
app.use(Express.static(path.join(_dirname, 'public')))
//app.use(Express.static(`/${_dirname}/public`))
//app.use('/viajes/',Express.static(path.join(_dirname, 'public')))

app.set('views', `${_dirname}/src/views`) // estableser la ruta de las platillas

// hABilitar request.body parse
app.use(Express.urlencoded({ extended: true}))

/// router
app.use(router)

// view engine
app.set('view engine', 'pug'); // motor de platillas

// es un comentario

app.listen(port, host,() => {
    console.log(`listening in host: ${host} in port: ${port}`)
    connnetDB()   
})