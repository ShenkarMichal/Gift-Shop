import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GiftModel } from 'src/app/models/gift-model';
import { GiftsServiceService } from 'src/app/services/gifts-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

    @Input()
    public gift: GiftModel

    @Output()
    public cardDelete = new EventEmitter<string>()

    public constructor(private giftService: GiftsServiceService) {}
    
    public async deleteGift(): Promise<void> {
      try {
        if(!window.confirm("Are you sure?")) return
        
        await this.giftService.deleteGift(this.gift._id)
        alert("The gift has been successfully deleted")

        this.cardDelete.emit(this.gift._id)                
      }
      catch (err: any) {
        console.log(err)        
      }
    }

}
