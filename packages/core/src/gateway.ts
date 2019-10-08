import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
import { ServiceDefinition } from "@apollo/federation";

export interface IGatewayConfig {
  services: Pick<ServiceDefinition, "name" | "url">[];
  port: number;
}

export default class Gateway {
  private server: ApolloServer;
  private config: IGatewayConfig;

  constructor(config: IGatewayConfig) {
    this.config = config;
    this.server = this.buildServer(config.services);
  }

  private buildServer(services) {
    const gateway = new ApolloGateway({ serviceList: services });
    return new ApolloServer({ gateway, subscriptions: false });
  }

  public start() {
    const { port } = this.config;
    this.server.listen(port, () => console.log("🚀 Running Gateway"));
  }
}
