const express = require("express");
const app = express();
//data base 
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const TodoTask = require("./models/TodoTask");

//conntect to database
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to db!");

    app.listen(3000, () => console.log("Server Up and running"));
});



//accèdes au style css
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));


//creation ficher ejs todo.ejs
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    //res.render() 	Génère un modèle de vue.
    res.render("todo.ejs", { todoTasks: tasks });
});

//POST METHOD
app.post('/', async (req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content
    });
    try {
        await todoTask.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
    }
});



