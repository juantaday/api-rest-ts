import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/dcrypt.handle";
import { generateToken } from "../utils/jwt.handle";


const registerNewUser = async ({email, password, name}:User)=>{
    const checkIs = await UserModel.findOne({email});
    if (checkIs) return "already_user";
  
    const passHash =  await encrypt(password);
    return await UserModel.create({email, password:passHash, name});
};

const loginUser = async ({email, password}:Auth)=>{
    const checkIs = await UserModel.findOne({email});
    if (!checkIs) return "USER_OR_EMAIL_INCORRECT";

   if(! await verified(password, checkIs.password))
      return "USER_OR_EMAIL_INCORRECT";
    

    const  data ={
        _id: checkIs._id,
        token:generateToken(checkIs.email),
        email:email,
    }
  return data;
};

export {registerNewUser,loginUser};