import express from 'express';

const app = express();
app.use(express.json());

const users = [];

app.post('/users', (req, res) => {
    // users.push(req.body);
    // res.status(201).json(users);
    console.log(req);
    res.send('User created');
});

app.get('/users', (req, res) => {
    // res.status(200).json(users);
    res.send('List of users');
});

app.listen(4000)

/* Criar nossa API de usuários
    Criar os Users
    Listar os Users
    Editar um User
    Deletar User
*/