# Chat de conversas com React

APP Frontend responsável pelos chats dos usuários nas salas de converas.dklasjldjaskdljaslkdjaskldjlaskdjl 

## Regras de funcionamento

Desenvolver uma aplicação web que seja capaz de funcionar como um chat aberto.

Para participar da sala, o usuário precisa inserir uma identificação (nome ou nickname).

Ao entrar na sala do chat, exibir a lista de mensagens enviadas. As mensagens deverão ser ordenadas por data de envio e de forma crescente.

Durante a conversa, o usuário deverá visualizar novas mensagens enviadas e também ser alertado quando um usuário entrar/ou sair da conversa.

O usuário poderá enviar novas mensagens e também sair da conversa.

### Pré-requisitos

YARN V1.^13 <br>
NodeJS V10^

## Instalar e executar o projeto

Fazer o donwload deste repositório, para rodar o frontend da aplicaçao:

### `yarn`

Execute este comando dentro da pasta raiz para instalar as dependências.<br>

### `yarn start`

 Execute este comando para iniciar a aplicação.<br>
A aplicação chat-app [http://localhost:3000](http://localhost:3000) está rodando em modo de desenvolvimento.<br>

## TODO

Melhorias a serem aplicadas em uma nova versão.

### Otimizar Scroll Conversas

Aprimorar o scroll no componente Conversa.jsx. Autualmente o scroll funciona, porém a última mensagem fica escondida.

### Status nas mensagens

Informar em cada mensagem se o usário está ativo ou inativo. Atualmente só está sendo exibido status de ausente. 

### Contador Usuários/ Conversas

Contabilizar o total de usuários em cada sala do chat. Atualmente colocando total de 2 em todas as salas.<br>
Contabilizar o total de mensagens enviadas em todas as salas. Atualmente exibindo o total de 1767 mensagens. 

### Componentizar template

O layout da aplicação foi divido somente por funcionalidades. Em uma próxima versão, componentizar o template é o ideal.
