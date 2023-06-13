export class GiftModel {
    public _id: string
    public audienceId: string
    public name: string
    public description: string
    public price: number
    public discount: number

    public Audience: {
        _id: number
        type: string
    }

    
}