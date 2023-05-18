import User from "./user.model";

export const createUserToDB = async () => {
    const user = await new User({
        id: "234",
        role: "student",
        password: "58498",
        name: {
            firstName: "Md",
            middleName: "Janam",
            lastName: "Khan",
        },
        dateOfBirth: "4/9/1988",
        gender: "male",
        email: "janam@hamid.com",
        contactNo: "015438905",
        emergencyContact: "0184389709",
        presentAddress: "23/A ghosh road",
        permanentAddress: "33/C das road uganda",
      });
      await user.save();
      return user;
};