import { Request, Response } from "express";
import  {registerNewUser, loginUser} from "../services/auth";

const  registerCtrl = async ({body}:Request, res:Response)=>{

  res.send(await  registerNewUser(body));
};

const  loginCtrl = async ({body}:Request,res:Response)=>{
  const  responseUser =await  loginUser(body);

  if (responseUser==="USER_OR_EMAIL_INCORRECT")
    res.status(403);

    res.send(responseUser);

};

export  {registerCtrl, loginCtrl};