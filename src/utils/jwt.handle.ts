import {sign, verify} from "jsonwebtoken"

const  JWT_SECRET =process.env.JWT_SECRET || "d361cfdrtgweewr4ew467";

const generateToken =  (id:string)=>{
    return  sign({id},JWT_SECRET,{expiresIn:"2h"});
};

const verifyToken =  (jwt:string)=>{
    return verify(jwt,JWT_SECRET);
};

export {generateToken,verifyToken};