const express = require('express');

const path = require('path');

const cors = require('cors');

const mongoose = require('mongoose');

let Todo = require('./models/Books');

const todoRoutes = express.Router();

const bodyParser = require('body-parser'); 

const app = express();

mongoose.connect('mongodb://localhost:27017/todos',{ useNewUrlParser: true , useUnifiedTopology: true  });

const connection = mongoose.connection;

connection.once('open',function(){

    console.log("MongoDB Connected Successfully..");
});

app.use(cors());

app.use(bodyParser.json());

todoRoutes.route('/').get(function(req,res){

        Todo.find(function(err,todos){
            if(err){
    
                    console.log(err);
            }else{
                res.json(todos);
            }
    
        });
    

});

todoRoutes.route('/:id').get(function(req,res) {
    let id = req.params.id;
    Todo.findById(id, function(err,todo){
        res.json(todo);

    });
});

todoRoutes.route('/add').post(function(req,res){
    let todo = new Todo(req.body);
    //console.log(todo);
    todo.save()
    .then(todo => {
        res.status(200).json({'book': 'Books Added Successfully.. '});
    })
    .catch(err => {

        res.status(400).send('adding Books failed');
    });

});

todoRoutes.route('/update/:id').post(function(req,res){
    Todo.findById(req.params.id, function(err,todo){
        if(!todo){
            res.status(404).send('data not found');
        }else{
            todo.book_name = req.body.book_name;
            todo.book_author = req.body.book_author;
            todo.book_desc = req.body.book_desc;

            todo.save().then(todo => {
                res.json('Books Updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");

            });
        }
    });
});

todoRoutes.route('/delete/:id').post(function(req,res){
    Todo.findByIdAndRemove(req.params.id,function(err,todo){
        if(!todo){
            res.status(404).send('data not found');
        }else{
            todo.remove().then(todo => {
                res.json('Books Deleted');
            })
            .catch(err => {
                res.status(400).send("Delete not possible");

            });
        }

    })

})
 

app.use('/todos',todoRoutes);

app.use(express.json({ extended: false }));

app.get('/', (req,res) => res.send('My API is running successfully'));

//define routes

/* app.use('/routes/log_entries', require('./routes/log_entries'));

app.put('/routes/log_entries/:id',(req,res) =>  {
    const entries = entries.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("The books with given id is not found")

});

app.delete('/routes/log_entries/:id',(req,res) =>  {
    const entries = entries.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("The books with given id is not found")

    const books = entry.indexOf(entries);
    entries.splice(books,1);

    res.send(entries);
});
*/

//app.use('/books',bookdata);



app.get ('/',function(req,res){
    res.sendFile(path.join(__dirname,'/src'));

});

app.post('/',function(req,res){
    db.collection('test').insertOne(req.body, function (err, result) {
        if (err)
           res.send('Error');
        else
          res.send('Success');
});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`)); 
