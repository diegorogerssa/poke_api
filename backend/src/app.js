import express from 'express';
import pokeApi from './pokeApi/poke.js'
import route from './routes/index.js'
import bodyParser from 'body-parser';
import cors from 'cors';




const app = express();
app.use(cors());
app.use(bodyParser.json())

app.use(express.json());


app.use(route)

// app.get('/teste', (_req, res)=> {
//   res.status(200).json({mensagem: 'rota certa'})
// })

// app.get('/:id', async function(req, res){
//   const { id } = req.params
//   const data = await pokeApi(id)
//   res.status(200).json(data)
//   })

export default app;
