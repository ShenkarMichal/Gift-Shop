import { GiftModel, IGiftModel } from "../4-models/gift-model";

function getAllGifts(): Promise<IGiftModel[]> {
    return GiftModel.find().exec()
}

export default {
    getAllGifts
}