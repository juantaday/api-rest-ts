import  {Request,Response} from "express"
import { handleHttp } from "../utils/error.handle";


const getItem=({body}:Request, res:Response)=>{
try {
        res.send (body);
    } catch (e) {
        handleHttp(res,'ERROR_GET_BLOG')
    }
}

const getItems =({body}:Request, res:Response)=>{
    try {
        res.send (body);
    } catch (e) {
        handleHttp(res,'ERROR_GET_BLOG')
    }
}

const postItem=({body}:Request, res:Response)=>{
    try {
        res.send (body);
    } catch (e) {
        handleHttp(res,'ERROR_GET_BLOG')
    }
}


const updateItem=(red:Request, res:Response)=>{

}

const deleteItem=(red:Request, res:Response)=>{

}

export {getItem, getItems, postItem,updateItem, deleteItem}
