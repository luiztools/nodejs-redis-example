# cache
Tutorial completo de cache em: https://www.luiztools.com.br/post/como-criar-um-cache-de-dados-com-redis-em-node-js/

Conheça meus livros: https://www.luiztools.com.br/meus-livros

Conheça meus cursos: https://www.luiztools.com.br/meus-cursos

Me siga nas redes sociais: https://about.me/luiztools

Receba novidades no Telegram: https://t.me/luiznews

## Para executar o exemplo de cache

1. Rode um npm install na raiz do projeto

2. Suba um servidor de Redis na sua máquina, conforme explicado no tutorial

3. Rode a aplicação com npm start

## Para executar os testes de cache

1. Rode um npm install na raiz do projeto

2. Suba um servidor de Redis na sua máquina, conforme explicado no tutorial

3. Suba um servidor de MySQL na sua máquina e crie um banco de teste

4. Altere a connection string no arquivo test.js para refletir os dados do seu banco

5. Se ainda não possui a tabela com os dados de teste, descomente o respectivo bloco e rode o projeto com npm test

6. Se já tem a tabela com os dados de teste, descomente o trecho da consulta do MySQL para testar somente ela com npm test

7. Querendo testar com Redis, deixe comentado o trecho que vai direto no MySQL e rode com npm test