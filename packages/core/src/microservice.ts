import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { DocumentNode } from "graphql";
import { GraphQLResolverMap } from "apollo-graphql";
import { Context } from "apollo-server-core";

export interface IMicroserviceConfig {
  name: string;
  port: number;
}

export default class Microservice {
  private server: ApolloServer;
  private config: IMicroserviceConfig;

  constructor(
    schema: DocumentNode,
    resolvers: GraphQLResolverMap<any>,
    config: IMicroserviceConfig,
    context?: Context,
  ) {
    this.config = config;
    this.server = this.buildServer(schema, resolvers, context);
  }

  private buildServer(schema, resolvers, context) {
    return new ApolloServer({
      context,
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
