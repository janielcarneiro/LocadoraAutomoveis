const express = require("express");
const exphbs = require('express-handlebars');
const session = require('express-session');

const hbs = exphbs.create({partialsDir: ["views/partials"]});
const users = require('./routes/users');
const client = require('./routes/clientes')
const vehicles = require('./routes/vehicles')
const alocacao = require('./routes/alocacao');
const conn = require("./db/conn");


const app = express();

const PORT = process.env.PORT || 3000;

// configura o template handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: 'principal'}));

app.set('view engine', 'handlebars');
app.set('views', './views');
app.set('dashboard', './views/dashboard');
app.set('resources', './resources');

app.use(
    express.urlencoded({extended: true})
)
app.use(express.json());

app.use(session({
  name: "session",
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));



app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.static('resources'));
app.use(users);
app.use('/clients', client)
app.use('/vehicles', vehicles);
app.use('/alocacoes', alocacao)

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