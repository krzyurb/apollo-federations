# Apollo federations

Example of apollo graphql microservices architecture.

### Running local

```shell
$ yarn bootstrap
$ yarn build
```

### Queries examples

```graphql
query GetUserByID {
  user(id: "1") {
    id
    username
    notes {
      id
      userId
      content
    }
  }
}

query GetUsersList {
  users {
    id
    username
    notes {
      id
      userId
      content
    }
  }
}

query CurrentUser {
  me {
    id
    username
    notes {
      id
      userId
      content
    }
  }
}

query GetNoteByID {
  note(id: "1") {
    id
    content
    userId
  }
}

query GetAllNotes {
  notes {
    id
    content
    userId
  }
}
```

### Stack

* [TypeScript](https://github.com/microsoft/TypeScript)
* [Lerna](https://github.com/lerna/lerna)
* [Apollo Server](https://github.com/apollographql/apollo-server)
