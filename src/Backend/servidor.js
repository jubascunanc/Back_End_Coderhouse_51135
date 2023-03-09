const http = require('http');
const PORT = 5500


const server = http.createServer((request, Response) =>{
  Response.end('Mi primer hola mundo en http')
})


app.get('/usuario', (request, response) =>{
    response.send(
    {
        nombre: 'Juan Jose',
        apellido: 'Bascuñan',
        edad: '23',
        correo: 'jubascunanc@udd.cl',
    }

    )
})

app.get('/usuario/:nombre/:apellido/:edad', (request, response) =>{
    console.log(http.request.params);
    Response.send(`Hola usuario de nombre:  ${request.params.nombre}`);
})


const usuarios = [
    {id:'1020', nombre: 'Juan Jose', apellido: 'Bascuñan'},
    {id:'2002', nombre: 'Santiago', apellido:'Bascuñan'},
]



app.get('/', (req, res) =>{
res.send(usuarios);
})


server.listen(PORT, () =>{
    console.log(`servidor escuchando en el puerto:  {$PORT}`);
})
