import express  from 'express'
import routesPokemon from './routesPokemon.js'
import routesUser from './routesUser.js'
import routesRegister from './routesRegister.js'
import routesLogin from './routesLogin.js'

const route = express.Router()

route.use('/pokemon', routesPokemon)
route.use('/user', routesUser)
route.use('/register',routesRegister )
route.use('/login', routesLogin)

export default route;
