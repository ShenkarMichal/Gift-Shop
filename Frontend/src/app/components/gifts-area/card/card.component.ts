import { Component, Input, OnInit } from '@angular/core';
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

}
