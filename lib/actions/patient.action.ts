import { Query } from "node-appwrite";
import { users } from "../appWrite.config";

export const createUser = async (user: CreateUserParams) => {
  try {
  } catch (error: any) {
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);
      return existingUser?.users[0];
    }
  }
};
