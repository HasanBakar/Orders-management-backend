import { Schema, model } from 'mongoose';
import { TUser, TFullname, TAddress, TOrder } from './user/user.interface';

const fullNameSchema = new Schema<TFullname>({
  firstName: String,
  lastName: String,
});

const addressSchema = new Schema<TAddress>({
  street: String,
  city: String,
  country: String,
});

const ordersSchema = new Schema<TOrder>({
  productName: String,
  price: Number,
  quantity: Number,
});

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    unique: true,
  },
  username: { type: String, unique: true },
  password: {
    type: String,
    select: false,
  },
  fullName: fullNameSchema,
  age: Number,
  email: {
    type: String,
    unique: true,
  },
  isActive: Boolean,
  hobbies: [String],
  address: addressSchema,
  orders: [ordersSchema],
});

export const UserModel = model<TUser>('User', userSchema);
