import { Microservice, loadSchemaFromFile } from '@fed/core';
import resolvers from "./resolvers";

const schema = loadSchemaFromFile(__dirname, "schema.gql");
const config = {
  name: "Notes",
  port: 4002,
};

export default new Microservice(schema, resolvers, config);
