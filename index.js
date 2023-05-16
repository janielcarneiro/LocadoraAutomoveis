const express = require("express");
const exphbs = require('express-handlebars');

const hbs = exphbs.create({partialsDir: ["views/partials"]});
const users = require('./routes/users');
const conn = require("./db/conn");

const app = express();

const PORT = process.env.PORT || 3000;

// configura o template handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: 'principal'}));

app.set('view engine', 'handlebars');
app.set('views', './views');
app.set('dashboard', './views/dashboard');
app.set('resources', './resources');


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.static('resources'));

app.get("/entrar", (req, res, next) => {
    res.render("login");
})

app.get("/dashboard", (req, res, next) => {
    res.render("dashboard/dashboard");
})

app.get("/clientes", (req, res, next) => {
    res.render("dashboard/client/client");
})

app.get("/veiculos", (req, res, next) => {
    res.render("dashboard/vehicle/vehicle");
})

app.get("/alocacoes", (req, res, next) => {
    res.render("dashboard/allocation/allocation");
})

app.get("/alocacoes/add", (req, res, next) => {
    res.render("dashboard/allocation/a_allocation");
})


app.use(users)

// sincroniza o modelo com o banco de dados e inicia o servidor

    app.listen(PORT, () => {
        console.log(`Servidor ligado na porta ${PORT}`);
    });
