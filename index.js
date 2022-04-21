const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('coding with node hii hello bye')
});

const users = [
    {id: 1, name: 'mia', email: 'mia@gmail.com', phone: '01234567'},
    {id: 2, name: 'korim', email: 'korim@gmail.com', phone: '77474448'},
    {id: 3, name: 'matt', email: 'matt@gmail.com', phone: '1244546546'},
    {id: 4, name: 'andru', email: 'andru@gmail.com', phone: '545554536'},
    {id: 5, name: 'maya', email: 'maya@gmail.com', phone: '65464345345'},
    {id: 6, name: 'kiam', email: 'kiam@gmail.com', phone: '775555'},
    {id: 7, name: 'sara', email: 'sara@gmail.com', phone: '5454654'},
]

app.get('/users', (req, res) =>{
    /* console.log('query', req.query);
    res.send(users) */
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users)
    }
})
app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = req.params.id;
    /* const user = users[id]; */
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req,res) =>{
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange'])
})

app.listen(port, ()=>{
    console.log('hello node', port);
})

