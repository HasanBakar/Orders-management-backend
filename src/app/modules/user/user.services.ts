import { UserModel } from '../user.module';

import { TUser } from './user.interface';

const createUserIntoDB = async (user: TUser) => {
  const newUser = await UserModel.create(user);
  const result = await UserModel.findOne(
    { _id: newUser._id },
    {
      _id: 0,
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
    },
  );

  return result;
};

export const userServices = {
  createUserIntoDB,
};