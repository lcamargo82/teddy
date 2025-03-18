#!/bin/bash
set -e

echo "Instalando dependências do backend..."
cd /app/api
npm install

echo "Executando migrações do banco de dados..."
npm run migration:run

echo "Iniciando backend (NestJS)..."
npm run start:dev &

echo "Instalando dependências do frontend..."
cd /app/frontend
npm install

echo "Iniciando frontend (React + Vite)..."
npm run dev -- --host 0.0.0.0 &

wait -n
