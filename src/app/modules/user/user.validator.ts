import Joi from 'joi';

const fullNameSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'any.required': 'First name is required.',
    'string.base': 'First name must be a string.',
  }),
  lastName: Joi.string().required().messages({
    'any.required': 'Last name is required.',
    'string.base': 'Last name must be a string.',
  }),
});

const addressSchema = Joi.object({
  street: Joi.string().required().messages({
    'any.required': 'Street is required.',
    'string.base': 'Street must be a string.',
  }),
  city: Joi.string().required().messages({
    'any.required': 'City is required.',
    'string.base': 'City must be a string.',
  }),
  country: Joi.string().required().messages({
    'any.required': 'Country is required.',
    'string.base': 'Country must be a string.',
  }),
});

export const JoiordersSchema = Joi.object({
  productName: Joi.string().messages({
    'string.base': 'Product name must be a string.',
  }),
  price: Joi.number().positive().messages({
    'any.positive': 'Price is allways positive.',
    'number.base': 'Price must be a number.',
  }),
  quantity: Joi.number().positive().messages({
    'any.positive': 'Quantity is allways positive.',
    'number.base': 'Quantity must be a number.',
  }),
});

export const joiUserSchema = Joi.object({
  userId: Joi.number().required().messages({
    'any.required': 'User ID is required.',
    'number.base': 'User ID must be a number.',
  }),
  username: Joi.string().required().messages({
    'any.required': 'Username is required.',
    'string.base': 'Username must be a string.',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required.',
    'string.base': 'Password must be a string.',
  }),
  fullName: fullNameSchema.required(),
  age: Joi.number().positive().required().messages({
    'any.required': 'Age is required.',
    'number.base': 'Age must be a number.',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required.',
    'string.email': 'Invalid email format.',
  }),
  isActive: Joi.boolean().required().messages({
    'any.required': 'isActive is required.',
    'boolean.base': 'isActive must be a boolean.',
  }),
  hobbies: Joi.array().items(Joi.string()).messages({
    'any.required': 'Hobbies are required.',
    'array.base': 'Hobbies must be an array.',
  }),
  address: addressSchema,
  orders: Joi.array().items(JoiordersSchema),
});
