import { Microservice, loadSchemaFromFile } from '@fed/core';
import resolvers from "./resolvers";

const schema = loadSchemaFromFile(__dirname, "schema.gql");
const config = {
  name: "users",
  port: 4001,
};

export default new Microservice(schema, resolvers, config);
