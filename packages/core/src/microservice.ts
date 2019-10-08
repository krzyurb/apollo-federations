import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { DocumentNode } from "graphql";

export interface IMicroserviceConfig {
  name: string;
  port: number;
}

export default class Microservice {
  private server: ApolloServer;
  private config: IMicroserviceConfig;

  constructor(schema: DocumentNode, resolvers: any, config: IMicroserviceConfig) {
    this.config = config;
    this.server = this.buildServer(schema, resolvers);
  }

  private buildServer(schema, resolvers) {
    return new ApolloServer({
      schema: buildFederatedSchema([{
        typeDefs: schema,
        resolvers,
      }]),
    });
  }

  public start() {
    const { port, name } = this.config;
    this.server.listen(
      port,
      () => console.log(`🚀 Running ${name.toUpperCase()} microservice`),
    );
  }
}
