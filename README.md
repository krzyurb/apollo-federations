# Apollo federations

Example of apollo graphql microservices architecture. It is not using any database to make example simpler.

Project consist of four packages:
- _core_ with some shared logic and types
- _gateway_ with apollo gateway microservice that bounds everything into single graph
- _notes_ and _users_ with separeted apollo-servers based services that provides parts of graph

## Running local

```shell
$ yarn bootstrap
$ yarn build
```

## Queries examples

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=apollo-federations&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fkrzyurb%2Fapollo-federations%2Fmaster%2Finsomnia.yaml)

If you have installed [Insomnia](https://insomnia.rest/) rest client you can check example queries.

## Stack

* [TypeScript](https://github.com/microsoft/TypeScript)
* [Lerna](https://github.com/lerna/lerna)
* [Apollo Server](https://github.com/apollographql/apollo-server)
