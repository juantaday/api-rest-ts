import { Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;

    const  idUser =user?.id;
   
    if ( idUser==="")
       throw ("not fount user");

    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: idUser,
      path: `${file?.path}`,
    };

    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile };