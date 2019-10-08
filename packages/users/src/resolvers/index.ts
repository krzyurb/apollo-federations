import meResolver from "./meResolver";
import userResolver from "./userResolver";
import usersListResolver from "./usersListResolver";

export default {
  Query: {
    me: meResolver,
    user: userResolver,
    users: usersListResolver,
  }
};
