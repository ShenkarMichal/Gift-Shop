import mongoose from "mongoose";

// 1 - Interface:
export interface IAudienceModel extends mongoose.Document {
    type: string
}

export const AudienceSchema = new mongoose.Schema<IAudienceModel>({
    type:{
        type: String,
        required: [true, "Type is missing"],
        minlength: [2, "Type is too short"],
        maxlength: [15, "Type is too long"]
    }
})

export const AudienceModel = mongoose.model<IAudienceModel>("AudienceModel", AudienceSchema, "Audience")