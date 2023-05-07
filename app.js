const axios = require('axios'); // Biblioteca necessária para manipular as APIs da Hathor

// Bibliotecas para o uso normal do node.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const __dirname = path.resolve();

const app = express();

app.use(express.static("./src/img"));
app.use(express.static("./src/css"));
app.use(express.static("./src/data"));


// app.use(express.static(__dirname + '/public'));

// Body-parser convertendo dados para JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Rotas (fora das APIs da Hathor)
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + "/src/html/index.html"));
    });

    // Criação da aposta 
    app.get('/desafio', (req, res) => {
        res.sendFile(path.join(__dirname + "/src/html/desafio.html"));
    });

    app.get('/desafio/get', (req, res) => {
        const { name, date, desc, cond_x_name, cond_x_symbol, cond_y_name, cond_y_symbol } = req.query;
        const queryParams = new URLSearchParams({ name, date, desc, cond_x_name, cond_x_symbol, cond_y_name, cond_y_symbol }).toString();
        //createToken(cond_x_name, cond_x_symbol);
        //createToken(cond_y_name, cond_y_symbol);
        res.redirect(`/apostas/?${queryParams}`);
    });

    // Visualização da aposta para preencher
    app.get('/apostas', (req, res) => {
        res.sendFile(path.join(__dirname + "/src/html/apostas.html"));
    });

    //
    app.get('/dashboard', (req, res) => {
        res.sendFile(path.join(__dirname + "/src/html/dashboard.html"));
    });

    //
    app.get('/perfil', (req, res) => {
        res.sendFile(path.join(__dirname + "/src/html/perfil.html"));
    });
//

// Escutando o servidor fora da API da Hathor
    app.listen(8081, function(){
        console.log("Servidor rodando na url http://localhost:8081");
    });
//

// Função que inicia a WALLET na aplicação
function startWallet() {
    axios.post('http://localhost:8000/start', {
        'wallet-id': 'def', // def é um nome qualquer
        'seedKey': 'default',
    }).then(response => {
        console.log(JSON.stringify(response.data));
    });
};

// Exibir endereços 
function getAddresses() {
    axios.get('http://localhost:8000/wallet/addresses', {
        headers: {
            'x-wallet-id': 'def',
        }
    }).then(response => {
        console.log(JSON.stringify(response.data));
    });
};

// Criar TOKEN
function createToken(name, symbol) {
    axios.post('http://localhost:8000/wallet/create-token',
    {
        'name': name,
        'symbol': symbol,
        'amount': 100,
        'address': 'WkMW7BLzg2KSzYaeGDaU7kf5cMJvE935ND',
    },
    {
        headers: {
            'x-wallet-id': 'def',
         
        }
    }).catch(function(error){
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        throw error;
    })
};

function enviaToken(token) {
    axios.post('http://localhost:8000/wallet/simple-send-tx', 
    {
        'adress': 'WSLXsqUKiUevdKrKniydc2VJ4GL2Drp3Qg',
        'value': 100,
        'token': token
    },
    {
        headers: {
            'x-wallet-id': 'def',
        }
    }).catch(function(error){
        if(error.message) {

        }
    })
}

enviaToken('00ffafd27cf5cced7232a0077b7cb76a6030ff96598ac6ff2ee7be95891ea3c6')

// startWallet();
// getAddresses();
