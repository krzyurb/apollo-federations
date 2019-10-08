import { Gateway } from '@fed/core';

const config =  {
  port: 4000,
  services: [
    { name: "users", url: "http://localhost:4001" },
    { name: "notes", url: "http://localhost:4002" },
  ],
};

export default new Gateway(config);
