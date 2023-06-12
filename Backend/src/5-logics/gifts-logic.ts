import { ValidateErrorModel } from "../4-models/errors-model";
import { GiftModel, IGiftModel } from "../4-models/gift-model";

function getAllGifts(): Promise<IGiftModel[]> {
    return GiftModel.find().exec()
}

function addGift(gift: IGiftModel): Promise<IGiftModel> {
    const errors = gift.validateSync()
    if(errors) throw new ValidateErrorModel(errors.message)
    return gift.save()
}

export default {
    getAllGifts,
    addGift
}