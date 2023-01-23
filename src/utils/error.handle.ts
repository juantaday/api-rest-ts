import { Response } from "express";

const handleHttp= (res:Response, error:string, errorRow? :any)=>{
    console.log (errorRow);
    
    res.status(500);
    res.send({error});
}

export {handleHttp};