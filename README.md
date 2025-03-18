# Projeto Teste para Teddy

Este projeto contém uma API desenvolvida em Nestjs e um frontend desenvolvido em React. A seguir, estão as instruções para configurar e executar o projeto em um ambiente Docker.

## Pré-requisitos

- Docker
- Docker Compose

## Instruções

### 1. Clone o repositório do GitHub

Clone o repositório para sua máquina local:

```bash
git clone git@github.com:lcamargo82/teddy.git
```

### 2. Acesse a pasta do projeto api

Acesse a pasta do projeto para configurar:

```bash
cd teddy/api
```

### 3. Configure o .env

Copie o arquivo env.exemple para .env:

```bash
cp example.env .env
```

### 4. Acesse a pasta do projeto frontend

Volte para a raiz e acesse a pasta do projeto para configurar:

```bash
cd /frontend
```

### 5. Configure o .env

Copie o arquivo env.exemple para .env:

```bash
cp example.env .env
```

### 4. Fazer o build e up do container

Voltar para a raiz e faça o buid do container com as migrations e subir a aplicação:

```bash
docker compose up --build -d
```

As aplicações estarão disponíveis nos endereços:

API: http://localhost:3000/

Documentação: http://localhost:3000/api

Frontend: http://localhost:5173/

### 6. Rodando os testes

Rodando os testes:

```bash
docker exec -it nest_container sh -c "cd /app/api && npm run test"
```

- Certifique-se de que suas portas no Docker não estejam em conflito com outras aplicações.
- Configure as variáveis de ambiente no arquivo .env conforme necessário para sua aplicação.
