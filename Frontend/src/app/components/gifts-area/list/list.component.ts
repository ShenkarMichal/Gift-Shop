import { Component, OnInit } from '@angular/core';
import { GiftModel } from 'src/app/models/gift-model';
import { GiftsServiceService } from 'src/app/services/gifts-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
	
	
	public gifts: GiftModel[]

	public constructor(private giftService: GiftsServiceService) {}

	async ngOnInit(): Promise<void> {
		try {
			this.gifts = await this.giftService.getAllGifts()

		} catch (err: any) {
			console.log(err)
		}
		
	}

}
