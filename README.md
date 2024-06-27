# Teste Técnico Be

Tenho muita satisfação em dizer que concluí com sucesso o teste técnico de backend. Todos os requisitos descritos foram implementados como pedido. Algumas decisões que tomei foram baseadas em uma estrutura que possibilitasse fácil abstração do funcionamento, facilitando a implementação de novas funcionalidades e manutenibilidade. Tive algumas dificuldades em construir um ambiente que facilitasse a alteração ou atualização para outra tecnologia (como Prisma ou SQLite), adaptando o mínimo de código possível. Acredito que fiz um bom trabalho. Criei testes para todas as rotas na tentativa de cobrir a maior parte da aplicação, prevenindo erros ou bugs inesperados e facilitando a implementação de novas funcionalidades, garantindo que a base continue sólida.

## Principais linguagens e tecnologias utilizadas

- **TypeScript**: Sua versatilidade contribui diretamente para o bom funcionamento da API, garantindo que informações são transmitidas e recebidas seguindo um padrão.
- **POO**: Organização, clareza e manutenibilidade definem os principais benefícios de ter usado Programação orientada a Objetos neste projeto.
- **Docker**: Grande facilidade na utilização de vários serviços de forma simultânea utilizando contêineres.
- **Sequelize**: fácil configuração e trouxe grandes benefícios ao trabalhar com banco de dados relacional.
- **JWT**: simplicidade no uso e grande utilidade no uso do payload para passar informações não sensíveis.
- **bcript**: A segurança de dados e muito importante e esta ferramenta cumpre muito bem seu proposito facilitando a manipulação de dados sensíveis.
- **express**: muito útil pela facilidade de gerenciar rotas e facilidade de integração com outras ferramentas.

## Instruções de instalação e uso

### Pré-requisitos

- **Node.js** (versão X.X.X)
- **npm** (versão X.X.X)
- **Docker**

### Instalação

#### Docker

1. Baixe e instale o Docker do site oficial:[Docker](https://www.docker.com/get-started/)

2. Verifique a instalação do Docker:
   ```bash
   docker --version
   docker-compose --version
   ```

#### Ubuntu

1. Atualize o sistema e instale Node.js e npm:

   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

2. Clone o repositório:

   ```bash
   git clone https://github.com/Henriquekrs/Test_Tec_Be_Backand
   ```

3. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositório
   ```

4. Instale as dependências:
   ```bash
   npm install
   ```

#### Windows

1. Baixe e instale o Node.js e npm do site oficial: [Node.js](https://nodejs.org/)

2. Clone o repositório:

   ```bash
   git clone https://github.com/Henriquekrs/Test_Tec_Be_Backand
   ```

3. Navegue até o diretório do projeto:

   ```cmd
   cd nome-do-repositório
   ```

4. Instale as dependências:
   ```cmd
   npm install
   ```

#### macOS

1. Instale o Homebrew (se ainda não tiver):

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Use o Homebrew para instalar Node.js e npm:

   ```bash
   brew install node
   ```

3. Clone o repositório:

   ```bash
   git clone https://github.com/Henriquekrs/Test_Tec_Be_Backand
   ```

4. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositório
   ```

5. Instale as dependências:
   ```bash
   npm install
   ```

### Uso

Passos para iniciar e usar o projeto:

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run compose:up
   ```

- Esses serviços irão inicializar um contêiner chamado `test_be_api` e outro chamado `test_be_db`;

### Exemplos de uso

- Para utilização rode os seguintes comandos:
  ```bash
  cd backend/              e preciso estar dentro do diretorio backend para rodar os proximos comandos
  npm run db:reset         garante que o banco de dados será criado do zero e populado com dados básicos
  ```
- As funcionalidades podem ser utilizadas através da extensão do VSCode ThunderClient ou similar.

### ➡️ Rotas disponiveis ⬅️

- A API conta com 5 fluxos principais:

1. User (Cadastro de pessoas usuarias)

- Permite cadastro de pessoas usuarias.

  ```json
  //Exemplo faça uma requisição POST para /user com as seguintes informações:

  {
    "email": "teste3@teste.com",
    "password": "Password3@"
  }
  ```

2. Login (Permite login com usuário cadastrado)

- Faça o login de um usuario existente previamente cadastrado.

  ```json
  //Exemplo faça uma requisição POST para /login com usuario criado acima:

  {
    "email": "teste3@teste.com",
    "password": "Password3@"
  }

  //salve o token pois ele será necessário para acessar as outras rotas
  ```

3. Client (Clientes)

- Busque todos clientes cadastrados.

- ⚠️ Este paço abaixo sera necessario em todas as todas proximas rotas. ⚠️
- Cole o Token gerado no login na parte de Headers incluindo a chave Bearer seguido do token como na imagem abaixo.

  ![Exemplo de uso do Token](/assets/Token_Bearer.png)

  ```json
  //Exemplo faça uma requisição GET para a rota /client
  ```

- Busque um cliente pelo seu ID.

  ```json
  //Exemplo faça uma requisição GET para a rota /client/:id com o ID do cliente desejado
  ```

- Cadastre um cliente.

  ```json
  //Exemplo faça uma requisição POST para a rota /client com os seguintes dados

  {
    "name": "Harry Poter",
    "cpf": "123.123.123.22",
    "address": {
      "rua": "Rua dos Alfeneiros nº4",
      "cidade": "Bracknell",
      "estado": "Little Whinging",
      "cep": "717125-27",
      "pais": "Londres",
    },
    "phones": ["7123-343-09", "7121-343-02"],
  };
  ```

- Altere os dados de um cliente.

  ```json
  //Exemplo faça uma requisição PUT para a rota /client/:id com o ID e os seguintes dados a serem alterados

  {
   "name": "Harry Potter",
   "cpf": "123.123.123.22",
   "address": {
     "rua": "Rua dos Alfeneiros nº4",
     "cidade": "Bracknell",
     "estado": "Little Whinging",
     "cep": "717125-27",
     "pais": "Londres",
   },
   "phones": ["7123-343-09", "7121-343-02"],
  };
  ```

- Exclua um cliente.

  ```json
  //Exemplo faça uma requisição DELETE para a rota /client/:id com o ID do cliente que deseja excluir

  ```

4. Product (Produtos)

- Busque todos os produtos cadastrados.

```json
  //Exemplo faça uma requisição GET para a rota /product
```

- Busque um produto pelo ID.

```json
  //Exemplo faça uma requisição GET para a rota /product/:id com o ID do produto desejado
```

- Cadastre um produto.

```json
  //Exemplo faça uma requisição POST para a rota /product com os seguintes dados

  {
    "nome": "Sabre de luz",
    "descricao": "Descrição do Produto A",
    "preco": "10000.00",
  };
```

- Altere os dados de um produto.

```json
  //Exemplo faça uma requisição PUT para a rota /product/:id com o ID e os seguintes dados a serem alterados

  {
   "nome": "Sabre de luz",
   "descricao": "Que a Força esteja com você",
   "preco": "10000.00"
  };
```

- Exclua um produto.

  ```json
  //Exemplo faça uma requisição DELETE para a rota /product/:id com o ID do produto que deseja excluir

  ```

5. Sales (Vendas)

- Busque todas as vendas cadastradas.

```json
  //Exemplo faça uma requisição GET para a rota /sales
```

- Cadastre uma venda.

  ```json
  //Exemplo faça uma requisição POST para a rota /sales com os seguintes dados

  {
    "clientId": 1,
    "productId": 5,
    "quantidade": 2,
    "precoUnitario": 1000,
    "precoTotal": 2000,
  };
  ```

## Contato

Se você tiver alguma dúvida, entre em contato:

- **Gustavo Henrique**
- E-mail: [ghrduarte@hotmail.com](mailto:ghrduarte@hotmail.com)
- GitHub: [henriquekrs](https://github.com/Henriquekrs)
