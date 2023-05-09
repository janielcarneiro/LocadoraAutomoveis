const express = require("express");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({partialsDir: ["views/partials"]});
const users = require('./routes/users');
const app = express();

const PORT = process.env.PORT || 3000;

// configura o template handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: 'principal'}));

app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.static('resources'));


app.use(users)

// sincroniza o modelo com o banco de dados e inicia o servidor

    app.listen(PORT, () => {
        console.log(`Servidor ligado na porta ${PORT}`);
    });
