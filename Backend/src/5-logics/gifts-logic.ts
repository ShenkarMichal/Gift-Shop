import { AudienceModel, IAudienceModel } from "../4-models/audience-model";
import { ValidateErrorModel } from "../4-models/errors-model";
import { GiftModel, IGiftModel } from "../4-models/gift-model";

function getAllGifts(): Promise<IGiftModel[]> {
    return GiftModel.find().populate("Audience").exec()
}

function addGift(gift: IGiftModel): Promise<IGiftModel> {
    const errors = gift.validateSync()
    if(errors) throw new ValidateErrorModel(errors.message)
    return gift.save()
}

function getAllAudience(): Promise<IAudienceModel[]> {
    return AudienceModel.find().exec()
}

function getGiftByAudience(audienceId:string): Promise<IGiftModel[]> {
    return GiftModel.find({audienceId}).populate("Audience").exec()
    
}

export default {
    getAllGifts,
    addGift,
    getAllAudience,
    getGiftByAudience
}