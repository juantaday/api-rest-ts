import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage";

const StorageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String,
      requerid:true,
    },
    idUser: {
      type: String,
requerid:true,
    },
    path: {
      type: String,
      requerid:true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const StorageModel = model("storage", StorageSchema);
export default StorageModel;