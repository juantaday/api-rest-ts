import { Storage } from "../interfaces/storage";
import StorageModel from "../models/storage";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  if (idUser.length===0 )
       throw ("USER NOT FOUNT");

  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };