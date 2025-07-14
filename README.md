# ⚽ Football API - Clubs & Players (Node.js + TypeScript)

Este projeto é uma API REST simples construída com **Node.js**, **Express** e **TypeScript**, que oferece operações CRUD completas para:

- 🏟️ Clubes de Futebol
- 🧍 Jogadores de Futebol

Os dados são mantidos **em memória**, importados diretamente de arquivos `.json`, com suporte a leitura, criação, atualização e exclusão.  
📚 **Projeto desenvolvido como parte de um desafio da plataforma [Digital Innovation One (DIO)](https://www.dio.me/)**.

---

## 🚀 Funcionalidades

### ✅ Clubs (`/api/clubs`)
- `GET /api/clubs` → Lista todos os clubes
- `GET /api/clubs/:id` → Busca clube pelo ID
- `POST /api/clubs` → Cria um novo clube
- `PATCH /api/clubs/:id` → Atualiza nome do clube
- `DELETE /api/clubs/:id` → Remove um clube

### ✅ Players (`/api/players`)
- `GET /api/players` → Lista todos os jogadores
- `GET /api/players/:id` → Busca jogador pelo ID
- `POST /api/players` → Cria um novo jogador
- `PATCH /api/players/:id` → Atualiza nome do jogador
- `DELETE /api/players/:id` → Remove um jogador

---

## 🧱 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- Importação direta de JSON (`resolveJsonModule: true`)
- Arquitetura MVC (Model - Controller - Repository)

---


---

## ▶️ Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-projeto.git

# Entre na pasta do projeto
cd nome-do-projeto

# Instale as dependências
npm install

# Inicie o servidor (modo dev)
npm run start

👨‍💻 Autor
Desenvolvido por Manuel, como parte do aprendizado prático com APIs REST na DIO (Digital Innovation One).


