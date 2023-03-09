import express from 'express';

// declaramos express
const app = express();
const PORT = 8086

app.get('/saludo', (req, res) => {
    res.send('Hola a todos, pero desde express!!')
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})
