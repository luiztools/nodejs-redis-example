# pubsub

Tutorial completo de PubSub em: https://www.luiztools.com.br/post/processamento-assincrono-de-tarefas-com-filas-no-redis-e-node-js/

Conheça meus livros: https://www.luiztools.com.br/meus-livros

Conheça meus cursos: https://www.luiztools.com.br/meus-cursos

Me siga nas redes sociais: https://about.me/luiztools

Receba novidades no Telegram: https://t.me/luiznews

## Para executar o exemplo de PubSub

1. Rode um npm install na raiz do projeto

2. Suba um servidor de Redis na sua máquina, conforme explicado no tutorial

3. Rode a webapi com node publisher.js

4. Rode um ou mais subscribers com node subscriber1.js

5. Faça POST http://localhost:3000/channel1 com JSON no body para ver em ação