import { Schema, model } from 'mongoose';
import { User, Fullname, Address, Orders } from './user/user.interface';

const fullNameSchema = new Schema<Fullname>({
  firstName: String,
  lastName: String,
});

const addressSchema = new Schema<Address>({
  street: String,
  city: String,
  country: String,
});

const ordersSchema = new Schema<Orders>({
  productName: String,
  price: Number,
  quantity: Number,
});

const userSchema = new Schema<User>({
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

export const UserModel = model<User>('User', userSchema);
