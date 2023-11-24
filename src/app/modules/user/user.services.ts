// import { UserModel } from '../user.module';
import { UserModel } from '../user.module';

import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

export const userServices = {
  createUserIntoDB,
};
