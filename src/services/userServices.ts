import { getUserQuery } from "../db/queries/getUser";
import { IUser } from "../db/types";

export const getUserService = async (userName: string): Promise<IUser[]> => {
  return await getUserQuery(userName)
}