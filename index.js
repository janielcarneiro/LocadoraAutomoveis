const express = require("express");
const exphbs = require('express-handlebars');
const user = require('./routes/users')
const conn = require("./db/conn");
const veiculos = require('./routes/veiculos')
const Users = require('./model/User')
const Veiculos = require('./model/Veiculos')
const app = express();

const PORT = process.env.PORT || 3000;

// configura o template handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: 'principal'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


app.use(user)

app.use('/veiculos', veiculos);

// sincroniza o modelo com o banco de dados e inicia o servidor

    conn.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor ligado na porta ${PORT}`);
        });
      console.log('Server Started')
    })
    .catch((err) => {
      console.log(err)
    })
