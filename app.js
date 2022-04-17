const express = require('express');

const app = express();

app.get('/' , (req , res) => res.send("Olá Mundo!"));
app.get('/contatos' , (req, res) => res.send('Página de contatos'));

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
