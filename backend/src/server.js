import app from './app.js'
import 'dotenv/config'
import connection from './data/connection.js'



app.listen(process.env.APP_PORT, async () => {
  console.log(`Servidor Rodando na porta ${process.env.APP_PORT}`);
  const [result] = await connection.execute('SELECT 1')

  if(result) console.log('Mysql Connection ok');

})