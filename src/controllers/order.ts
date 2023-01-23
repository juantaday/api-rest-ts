import { Request, Response } from "express";

const  getOrders = async ({body}:Request, res:Response)=>{

  res.send("devuelto ordenes");
};
export  {getOrders};