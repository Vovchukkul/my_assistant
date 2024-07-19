import { User } from "../types/User";

export function getNewId(users: User[]) {
  return Math.max(
    ...users.map(user => user.id),
  );
}
