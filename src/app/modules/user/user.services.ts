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

const getAllUserFromDB = async () => {
  const result = await UserModel.find({}).select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });

  return result;
};

const getSingleUserFromDB = async (userId: number): Promise<TUser | null> => {
  const result = await UserModel.findOne(
    { userId },
    {
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

const options = {
  new: true,
  projection: { orders: 0, password: 0 },
};

const updateUserIntoDB = async (
  userId: number,
  updatedUser: TUser,
): Promise<TUser | null> => {
  const result = await UserModel.findOneAndUpdate(
    { userId }, //find user by userId
    { $set: updatedUser }, // update user by updatedUser
    options,
  );
  return result;
};

const deleteUserIntoDB = async (userId: number) => {
  const result = await UserModel.deleteOne({ userId });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserIntoDB,
};
