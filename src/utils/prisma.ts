import { User } from '@prisma/client';

type keys = keyof User;

export const excludeFieldsUser = <Data extends User, Key extends keys>(
  user: Data,
  keys: Key[]
) => {
  const result = Object.fromEntries(
    Object.entries(user).filter(([key]) => !keys.includes(key as Key))
  );

  return result;
};

// type keys = keyof User;

// function exclude<Data extends User, Key extends keys>(
//   user: Data,
//   keys: Key[]
// ): Omit<Data, Key> {
//   return Object.fromEntries(
//     Object.entries(user).filter(([key]) => !keys.includes(key as Key))
//   ) as Omit<Data, Key>;
// }
