import { IUser } from "./user.interface";
import User from "./user.model";

// create user
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload); //User -> class user -> instance
    await user.save(); //build in instance methods. 
    console.log(user.fullName()); // Custom instance methods
    return user;
};

// get all users
export const getUserFromDB = async (): Promise<IUser[]> => {
    const users = await User.find({});
    return users;
};

// get single user
export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1, email: 1 });
    return user;
};

export const getAdminUserFromDB = async () => {
    const admin = await User.getAdminUsers();
    console.log('admin', admin)
    return admin;

};
// Class -> Attach -> Methods -> Directly call using Class
// user = new User
// user. instance methods
// User.getAdminUserFromDB