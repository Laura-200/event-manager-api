
// Importando o Express
const express = require('express');

// Importando o MongoDB
const { MongoClient, ObjectId } = require('mongodb');

// Carregando as configurações do arquivo .env
require('dotenv').config();

// Pegando o endereço de conexão do arquivo .env
const uri = process.env.MONGO_URI;

// Criando o cliente do MongoDB
const client = new MongoClient(uri);

// Criando o aplicativo
const app = express();

// Permitindo que a API receba dados em formato JSON
app.use(express.json());

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;

// Preparando a coleção de eventos
let eventos;

// Criando a rota inicial da API
app.get('/', (req, res) => {
    res.send('API Event Manager funcionando!');
});

// Criando a rota para cadastrar eventos
app.post('/eventos', async (req, res) => {

    // Recebendo os dados enviados na requisição
    const dadosEvento = req.body;

    try {

        // Salvando o evento no MongoDB
        const resultado = await eventos.insertOne(dadosEvento);

        // Enviando a confirmação do cadastro
        res.status(201).json({
            mensagem: 'Evento cadastrado com sucesso!',
            id: resultado.insertedId
        });

    } catch (erro) {
        console.error('Erro ao cadastrar evento:', erro);

        res.status(500).json({
            mensagem: 'Erro ao cadastrar evento.'
        });
    }
});

// Criando a rota para listar todos os eventos
app.get('/eventos', async (req, res) => {

    try {

        // Buscando todos os eventos no MongoDB
        const listaEventos = await eventos.find().toArray();

        // Enviando a lista de eventos
        res.json(listaEventos);

    } catch (erro) {
        console.error('Erro ao buscar eventos:', erro);

        res.status(500).json({
            mensagem: 'Erro ao buscar eventos.'
        });
    }
});

// Criando a rota para buscar um evento pelo ID
app.get('/eventos/:id', async (req, res) => {

    // Recebendo o ID enviado pela URL
    const id = req.params.id;

    // Verificando se o ID é válido
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({
            mensagem: 'ID inválido.'
        });
    }

    try {

        // Buscando o evento pelo ID no MongoDB
        const evento = await eventos.findOne({
            _id: new ObjectId(id)
        });

        // Verificando se o evento foi encontrado
        if (!evento) {
            return res.status(404).json({
                mensagem: 'Evento não encontrado.'
            });
        }

        // Enviando o evento encontrado
        res.json(evento);

    } catch (erro) {
        console.error('Erro ao buscar evento:', erro);

        res.status(500).json({
            mensagem: 'Erro ao buscar evento.'
        });
    }
});

// Criando a rota para atualizar um evento
app.put('/eventos/:id', async (req, res) => {

    // Recebendo o ID enviado pela URL
    const id = req.params.id;

    // Verificando se o ID é válido
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({
            mensagem: 'ID inválido.'
        });
    }

    try {

        // Atualizando os dados do evento no MongoDB
        const resultado = await eventos.updateOne(
            { _id: new ObjectId(id) },
            { $set: req.body }
        );

        // Verificando se o evento foi encontrado
        if (resultado.matchedCount === 0) {
            return res.status(404).json({
                mensagem: 'Evento não encontrado.'
            });
        }

        // Enviando a confirmação da atualização
        res.json({
            mensagem: 'Evento atualizado com sucesso!'
        });

    } catch (erro) {
        console.error('Erro ao atualizar evento:', erro);

        res.status(500).json({
            mensagem: 'Erro ao atualizar evento.'
        });
    }
});

// Criando a rota para excluir um evento
app.delete('/eventos/:id', async (req, res) => {

    // Recebendo o ID enviado pela URL
    const id = req.params.id;

    // Verificando se o ID é válido
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({
            mensagem: 'ID inválido.'
        });
    }

    try {

        // Excluindo o evento do MongoDB
        const resultado = await eventos.deleteOne({
            _id: new ObjectId(id)
        });

        // Verificando se o evento foi encontrado
        if (resultado.deletedCount === 0) {
            return res.status(404).json({
                mensagem: 'Evento não encontrado.'
            });
        }

        // Enviando a confirmação da exclusão
        res.json({
            mensagem: 'Evento excluído com sucesso!'
        });

    } catch (erro) {
        console.error('Erro ao excluir evento:', erro);

        res.status(500).json({
            mensagem: 'Erro ao excluir evento.'
        });
    }
});

// Iniciando a conexão com o banco de dados
async function iniciarServidor() {
    try {

        // Conectando ao MongoDB
        await client.connect();

        console.log('Conectado ao MongoDB!');

        // Selecionando o banco de dados
        const db = client.db('event_manager');

        // Selecionando a coleção de eventos
        eventos = db.collection('eventos');

        console.log('Banco de dados preparado!');

        // Iniciando o servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });

    } catch (erro) {
        console.error('Erro ao conectar ao MongoDB:', erro);
    }
}

// Executando a função de conexão
iniciarServidor();
