// exercicios simples com parametros

const express = require('express');
const app = express();
app.listen(3000,()=>{
    console.log("Servidor em execução");
})

// dados dos clientes
const clientes = [
    {id:1, nome: "Acheron", telefone: '(11) 1111-1111', email: 'acheron@gmail.com'},
    {id:2, nome: "Jing Yuan", telefone: '(11) 2222-2222', email: 'jingyuan@gmail.com'},
    {id:3, nome: "Himeko", telefone: '(11) 3333-3333', email: 'himeko@gmail.com'},
    {id:4, nome: "Natasha", telefone: '(11) 4444-4444', email: 'natasha@gmail.com'},
    {id:5, nome: "Qingque", telefone: '(11) 5555-5555', email: 'qingque@gmail.com'},
    {id:5, nome: "Gepard", telefone: '(11) 5555-5555', email: 'gepard@gmail.com'},
    {id:5, nome: "Welt", telefone: '(11) 5555-5555', email: 'welt@gmail.com'},
    {id:6, nome: "Otávio", telefone: '(11) 6666-6666', email: 'otavinhogameplaysreidelascapatudo69@gmail.com'}
]

//rotas

app.get('/',(req,res)=>{
    res.send("<h1>API de Clientes</h1>")
})

//rota com o total de clientes

app.get('/total_clientes',(req,res)=>{
    res.send("O total de clientes: <br />"+clientes.length);
})

//rota para apresentar os dados de um cliente especifico
app.get('/clientes/:id',(req,res)=>{
    const cliente = clientes.find(c=>c.id===parseInt(req.params.id));

    //se nao existir o cliente
    if(!cliente) res.status(404).send('Cliente não encontrado');

    //se existir
    res.send(`O cliente é: ${cliente.nome}, seu telefone é: ${cliente.telefone} e seu email é ${cliente.email}`)
})