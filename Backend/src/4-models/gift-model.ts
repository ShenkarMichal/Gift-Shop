import mongoose from "mongoose";
import { AudienceModel } from "./audience-model";

// 1- interface:
export interface IGiftModel extends mongoose.Document {
    audienceId: mongoose.Schema.Types.ObjectId
    name: string
    description: string
    price: number
    discount: number
}

// 2- schema:
export const GiftSchema = new mongoose.Schema<IGiftModel>({
    audienceId: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: [true, "Name is missing"],
        minlength: [2, "Name is too short"],
        maxlength: [20, "Name is too long"]
    },
    description: {
        type: String, 
        required: [true, "Description is missing"],
        minlength: [2, "Description is too short"],
        maxlength: [100, "Description is too long"]
    },
    price: {
        type: Number, 
        required: [true, "Price is missing"],
        min: [0, "Price can't be negative"],
        max: [1000, "Price is too high"]
    },
    discount: {
        type: Number, 
        required: [true, "Discount is missing"],
        min: [0, "Discount can't be negative"],
        max: [100, "Discount is too high"]
    }
}, {
    versionKey: false,
    toJSON: {virtuals: true},
    id: false
})

GiftSchema.virtual("Audience", {
    ref: AudienceModel,
    localField: "audienceId",
    foreignField: "_id",
    justOne: true
})

// 3- model:
export const GiftModel = mongoose.model<IGiftModel>("GiftModel", GiftSchema, "Gifts")