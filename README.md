# ze-challenge

| Statements                | Branches                | Functions                | Lines                |
| ------------------------- | ----------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Instalação

Instale com o **npm** executando o comando `npm run install`.

## Desenvolvimento local
A aplicação possui o banco rodando em um container, por isso é necessário a instalação do *Docker* para a utilização do mesmo pelo comando:

```bash
  docker-compose up
```
Feito isto é necessário rodar as *migrations*, para isto é necessário ter o *sequelize-cli* instalado.

```bash
npm install --save-dev sequelize-cli
```

Primeiro vá até o caminho `src/config/database.js` e substitua os campos:
  * host
  * database
  * username
  * password

com os valores:
```json
  host: '127.0.0.1',
  dialect: 'postgres',
  database: 'ze',
  username: 'postgres',
  password: 'pg@123'
``` 
Isto é necessário para fazer funcionar as *migrations*, visto que o **sequelize-cli** não reconhece o env.

Após a instalação do **sequelize-cli** e a substituiçao dos campos, utilize o comando para realizar as *migrations*:
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

Execute o comando abaixo para executar a API.

```bash
npm run debug:api
```

## Deploy
Para realizar o deploy basta fazer um push na master ou mergear um pull request na mesma, esta configurado um github action que faz deploy no heroku

## Contribuindo

- O projeto faz uso do [**commitlint**](https://github.com/conventional-changelog/commitlint) em conjunto com [**husky**](https://github.com/typicode/husky) e [**commmitizen**](https://github.com/commitizen/cz-cli).
- Caso já esteja familiarizado com a convenção de commits do [**Angular**](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines), faça seu commit de forma convencional e não terá problemas, de toda forma, segue abaixo um roteiro básico para um commit seguindo as convenções:

1. `git add .`
2. `yarn cz`
3. Escolha o tipo dentre os disponíveis na convenção e expostos no terminal. e.g. _docs_
4. Diga o escopo que está sendo modificado. e.g. _project_
5. Escreva sua mensagem de commit de forma imperativa e curta. e.g. _add commitlint and git-cz to the project_

- As demais escolhas são opcionais.

## Testes unitários

- O projeto faz uso dos testes unitários com um mínimo de 90% de cobertura de código sobre o serviço.

## Controle de versão

- O projeto mantém o histórico de versões através do uso do [**conventional-changelog-cli**](https://github.com/conventional-changelog/commitlint).
- Para versionar o projeto execute o roteiro abaixo.

1. Crie uma branch a partir de _develop_ com a seguinte convenção: _release/X.X.X_, seguindo a convenção **[SemVer](https://semver.org/)**.
2. Execute o script `npm version MAJOR|MINOR|PATCH -m "ci(project): add X features and bump version"`.
3. Caso esteja atualizando diretamente a _develop_, basta realizar o _merge_ das branches e realizar o _push_, caso contrário, suba a _branch_ de release e abra um _pull request_.

- Neste momento a versão no _package.json_ foi atualizada, a tag de versão foi criada seguindo o prefixo `tag-version-prefix="release-"` e o _[CHANGELOG.md](CHANGELOG.md)_ também é incrementado contendo os _fixes_ e _features_.

- [CHANGELOG](CHANGELOG.md)

# Misc
Sobre o framework utilizado para injeção de dependência **expres-decorator-router** e abstração do
arquivo de rotas este é um [artigo](https://dev.to/wakeupmh/decouple-your-express-applications-using-the-amazing-express-decorator-router-35p2) que falo um pouco sobre o beneficio do mesmo e um detalhe legal é que este esta listado no [awesome-express](https://github.com/rajikaimal/awesome-express) na categoria de **middleware**.
