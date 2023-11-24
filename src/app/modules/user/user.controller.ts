import { Request, Response } from 'express';
import { userServices } from './user.services';
import bcrypt from 'bcrypt';
import joiUserSchema from './user.validator';

const initialRoute = (req: Request, res: Response) => {
  res.send('🎁🎁🎁 Orders management backend server is ready 🎁🎁🎁');
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = await req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    const { error, value } = joiUserSchema.validate(user);
    const result = await userServices.createUserIntoDB(value);

    if (error) {
      res.status(500).json({
        success: false,
        message:
          'User is not successfuly created, because user is not valid to Joi validator😴',
        error: error.details,
      });
    }

    res.status(200).json({
      success: true,
      message: 'User successfuly created🏃🏾‍♂️',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User is not successfuly created😴',
      error: error,
    });
  }
};

export const userControllers = {
  initialRoute,
  createUser,
};
