import { Schema, model } from "mongoose";

export const APIKeySchema = new Schema(
  {
    apiKey: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    apiSecretKey: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export const APIKey = model("APIKey", APIKeySchema);
