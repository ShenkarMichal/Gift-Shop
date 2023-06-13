import express, { NextFunction, Request, Response } from 'express'
import giftsLogic from '../5-logics/gifts-logic'
import { GiftModel } from '../4-models/gift-model'

const router = express.Router()

//Get all gifts:
router.get("/gifts",async (request:Request, response: Response, next: NextFunction) => {
    try {
        const gifts = await giftsLogic.getAllGifts()
        response.json(gifts)    
    }
    catch (err: any) {
        next(err)        
    }    
})

//Get all audience:
router.get("/audience",async (request:Request, response: Response, next: NextFunction) => {
    try {
        const audience = await giftsLogic.getAllAudience()
        response.json(audience)    
    }
    catch (err: any) {
        next(err)        
    }    
})

//Get gift by audience:
router.get("/gifts/:audienceId",async (request:Request, response: Response, next: NextFunction) => {
    try {
        const audienceId = request.params.audienceId
        const gifts = await giftsLogic.getGiftByAudience(audienceId)
        response.json(gifts)    
    }
    catch (err: any) {
        next(err)        
    }    
})

//Add new gift:
router.post("/gifts",async (request:Request, response: Response, next: NextFunction) => {
    try {
        const gift = new GiftModel(request.body)
        const newGift = await giftsLogic.addGift(gift)
        response.status(201).json(newGift)    
    }
    catch (err: any) {
        next(err)        
    }    
})


export default router