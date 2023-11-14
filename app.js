import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middleware/cors.js'

// EN  EL FUTURO. el import
// import movies from './movies.json' with { type: 'json'}
//No puedes importar json directamente en ESmodules, como leer un Json en ESmodules
//import fs from 'node:fs'
//const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

const app = express()
app.use(json())
app.use(corsMiddleware( ))
app.disable('x-powered-by')
// metodos normales: GET/HEAD/POST
// metodos complejos: PUT/PATCH/DELETE

// CORS Pre-flight

app.use('/movies', moviesRouter) // Usará todas las rutas de movies.js 

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})