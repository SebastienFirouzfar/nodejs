const express = require("express");
const app = express();


//accèdes au style css
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true }));

//creation ficher ejs todo.ejs
app.set("moteur de visualisation", "ejs");


app.get('/', (req, res) => {
    //res.render() 	Génère un modèle de vue.
    res.render('todo.ejs')
});

app.post('/', (req, res) => {
    console.log(req.body);
});

// localhost:3000
app.listen(3000, () => console.log("Serveur opérationnel"));