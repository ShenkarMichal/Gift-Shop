import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GiftModel } from '../models/gift-model';
import { appConfig } from '../utils/config';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftsServiceService {

  constructor(private http: HttpClient) { }

  public async getAllGifts(): Promise<GiftModel[]>{
    const obsevable = this.http.get<GiftModel[]>(appConfig.giftURL)
    const gifts = await firstValueFrom(obsevable)

    return gifts
  }
}
