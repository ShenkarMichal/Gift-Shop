import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudienceModel } from 'src/app/models/audience-model';
import { GiftModel } from 'src/app/models/gift-model';
import { GiftsServiceService } from 'src/app/services/gifts-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    public newGift = new GiftModel()

    public constructor(private giftService: GiftsServiceService, private router: Router) {}

    public audience: AudienceModel[]

    async ngOnInit(): Promise<void> {
        try {
            this.audience = await this.giftService.getAllAudience()
        }
        catch (err: any) {
            console.log(err)            
        }        
    }    
    
    public async send(): Promise<void>{
        try {
            await this.giftService.addNewGift(this.newGift)
            alert("Gift has been successfully added")
            this.router.navigateByUrl("/gifts")
        }
        catch (err: any) {
            console.log(err)
        }
    }


}
