const axios = require('axios'); // Biblioteca necessária para manipular as APIs da Hathor

// Bibliotecas para o uso normal do node.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body-parser convertendo dados para JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas (fora das APIs da Hathor)
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + "/html/index.html"));
    });

    // Criação da aposta 
    app.get('/create_bet', (req, res) => {
        res.sendFile(path.join(__dirname + "/html/create_bet.html"));
    });

    app.get('/create_bet/get', (req, res) => {
        const { name, date, desc, cond_x_name, cond_x_symbol, cond_y_name, cond_y_symbol } = req.query;
        const queryParams = new URLSearchParams({ name, date, desc, cond_x_name, cond_x_symbol, cond_y_name, cond_y_symbol }).toString();
        createToken(cond_x_name, cond_x_symbol);
        createToken(cond_y_name, cond_y_symbol);
        res.redirect(`/?${queryParams}`);
    });

    // Visualização da aposta para preencher
    app.get('/view_bet', (req, res) => {

    });
//

// Escutando o servidor fora da API da Hathor
    app.listen(8081, function(){
        console.log("Servidor rodando na url http://localhost:8081");
    });
//

function startWallet() {
    axios.post('http://localhost:8000/start', {
        'wallet-id': 'def', // def é um nome qualquer
        'seedKey': 'default',
    }).then(response => {
        console.log(JSON.stringify(response.data));
    });
};

function getAddresses() {
    axios.get('http://localhost:8000/wallet/addresses', {
        headers: {
            'x-wallet-id': 'def',
        }
    }).then(response => {
        console.log(JSON.stringify(response.data));
    });
};

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

// startWallet();
// getAddresses();
