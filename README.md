# ze-challenge

| Statements                                    | Branches                                  | Functions                                   | Lines                               |
| --------------------------------------------- | ----------------------------------------- | ------------------------------------------- | ----------------------------------- | ----------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/afb05511ab7c823d330b)

## Resumo


## Instalação

Assumindo que o **yarn** é utilizado, do contrário, instale com o **npm** executando o comando `npm run install`.

```bash
yarn install
```

## Desenvolvimento local

Execute o comando abaixo para executar a API.

```bash
yarn debug
```

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

- O projeto faz uso dos testes unitários com um mínimo de 90% de cobertura de código.

## Controle de versão

- O projeto mantém o histórico de versões através do uso do [**conventional-changelog-cli**](https://github.com/conventional-changelog/commitlint).
- Para versionar o projeto execute o roteiro abaixo.

1. Crie uma branch a partir de _develop_ com a seguinte convenção: _release/X.X.X_, seguindo a convenção **[SemVer](https://semver.org/)**.
2. Execute o script `npm version MAJOR|MINOR|PATCH -m "ci(project): add X features and bump version"`.
3. Caso esteja atualizando diretamente a _develop_, basta realizar o _merge_ das branches e realizar o _push_, caso contrário, suba a _branch_ de release e abra um _pull request_.

- Neste momento a versão no _package.json_ foi atualizada, a tag de versão foi criada seguindo o prefixo `tag-version-prefix="release-"` e o _[CHANGELOG.md](CHANGELOG.md)_ também é incrementado contendo os _fixes_ e _features_.

- [CHANGELOG](CHANGELOG.md)
