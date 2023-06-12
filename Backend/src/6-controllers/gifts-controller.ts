import express, { NextFunction, Request, Response } from 'express'
import giftsLogic from '../5-logics/gifts-logic'

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


export default router