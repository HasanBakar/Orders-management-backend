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
      return res.status(500).json({
        success: false,
        message:
          'User is not successfuly created, because user is not valid to Joi validator😴',
        error: error.details,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User successfuly created🏃🏾‍♂️',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'User is not successfuly created😴',
      error: error,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB();
    return res.status(200).json({
      success: true,
      message: 'Users fetched successfully!🏃🏾‍♂️',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Users not found😴',
      error: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const UserId = Number(userId);
    const result = await userServices.getSingleUserFromDB(UserId);

    if (result === null) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    } else {
      return res.status(200).json({
        success: true,
        message: 'User fetched successfully!🏃🏾‍♂️',
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'User not found😴',
      error: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const UserId = Number(userId);
    const updatedUser = await req.body;
    const result = await userServices.updateUserIntoDB(UserId, updatedUser);

    if (result !== null) {
      return res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: result,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.details || 'Used not updated!',
      error: error,
    });
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const UserId = Number(userId);
    const result = await userServices.deleteUserIntoDB(UserId);

    if (result.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'User not found',
      error: {
        code: 404,
        description: 'User not found',
      },
    });
  }
};
export const userControllers = {
  initialRoute,
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteSingleUser,
};
