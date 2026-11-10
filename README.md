 <div align="center">

#  EVENT MANAGER API

### API REST para gerenciamento de eventos

Uma API desenvolvida com **Node.js, Express e MongoDB**, permitindo cadastrar, consultar, atualizar e excluir eventos.

<br>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Thunder_Client-5B45E0?style=for-the-badge&logo=thunderclient&logoColor=white" />

<br>

**Desenvolvido para praticar a criação de APIs REST e integração com banco de dados NoSQL.**

</div>

---

##  Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Instalação e execução](#-instalação-e-execução)
- [Rotas da API](#-rotas-da-api)
- [Testes](#-testes)
- [Banco de dados](#-banco-de-dados)
- [Publicação](#-publicação)
- [Autora](#-autora)

---

##  Sobre o projeto

O **Event Manager API** é um projeto desenvolvido com o objetivo de construir uma API REST para gerenciamento de eventos.

A aplicação permite realizar operações CRUD (*Create, Read, Update e Delete*), utilizando o Express para criação das rotas e o MongoDB Atlas para armazenamento dos dados.

Cada evento possui as seguintes informações:

| Campo | Descrição |
|---|---|
| `nome` | Nome do evento |
| `descricao` | Descrição do evento |
| `data` | Data de realização |
| `local` | Local do evento |
| `categoria` | Categoria do evento |

---

##  Tecnologias utilizadas

<div align="center">

| Tecnologia | Utilização |
|---|---|
| **Node.js** | Ambiente de execução JavaScript |
| **Express** | Criação do servidor e das rotas |
| **MongoDB** | Banco de dados NoSQL |
| **MongoDB Atlas** | Hospedagem do banco de dados na nuvem |
| **Thunder Client** | Testes das requisições HTTP |
| **dotenv** | Gerenciamento de variáveis de ambiente |
| **Git e GitHub** | Versionamento e armazenamento do projeto |
| **Render** | Publicação da API |

</div>

---

##  Funcionalidades

- [x] Cadastrar novos eventos.
- [x] Listar todos os eventos.
- [x] Buscar um evento específico pelo ID.
- [x] Atualizar informações de um evento.
- [x] Excluir eventos.
- [x] Conectar a aplicação ao MongoDB Atlas.
- [x] Utilizar variáveis de ambiente para proteger informações de conexão.
- [x] Testar as rotas utilizando o Thunder Client.

---

##  Estrutura do projeto

```text
event-manager-api/
│
├── node_modules/       # Dependências instaladas
│
├── .env                # Variáveis de ambiente
├── .gitignore          # Arquivos ignorados
