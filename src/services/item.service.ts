import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.model";


const insertCar = async  (item:Car)=>{
    return await ItemModel.create(item);
};

const getCars = async  ()=>{
    return await ItemModel.find({});
}

const getCar = async  (_id:String)=>{
    return await ItemModel.findOne({_id});
}


const updateCar = async  (id:String,data:Car)=>{
    return await ItemModel.findOneAndUpdate({_id:id},data, {new :true});
}

const deleteCar = async  (id:String)=>{
    return await ItemModel.findOneAndRemove({_id:id});
}


export {insertCar, getCars,getCar,updateCar,deleteCar};