import users from "./users";

export default (obj, args) => {
  const { id } = args;
  return users.find((user) => user.id === Number.parseInt(id));
}
