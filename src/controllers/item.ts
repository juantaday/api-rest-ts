import  {Request,Response} from "express"
import { getCar, getCars, insertCar, updateCar ,deleteCar} from "../services/item.service";
import { handleHttp } from "../utils/error.handle";


const getItem= async (req:Request, res:Response)=>{
    try {

        const {id} =req.params;
        const response =await getCar(id) ;
        res.send(response ? response : "NOT FOUNT");
   } catch (e) {
       handleHttp(res,'ERROR_GET_ITEM')
   }
}

const getItems = async ({body}:Request, res:Response)=>{
    try {
         res.send(await getCars() );
    } catch (e) {
        handleHttp(res,'ERROR_GET_ITEM')
    }
}

const postItem= async({body}:Request, res:Response)=>{
    try {
          res.send(await insertCar(body));
    } catch (e) {
        handleHttp(res,'ERROR_GET_ITEM',e)
    }
}


const updateItem=async({params,body}:Request, res:Response)=>{
    try {
        const {id} = params;
        res.send(await updateCar(id,body));
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM',e)
    }
}

const deleteItem= async ( {params}:Request, res:Response)=>{
    const {id} =params;
    res.send(await deleteCar(id) );
}

export {getItem, getItems, postItem,updateItem, deleteItem}
