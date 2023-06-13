import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GiftModel } from '../models/gift-model';
import { appConfig } from '../utils/config';
import { firstValueFrom } from 'rxjs';
import { AudienceModel } from '../models/audience-model';

@Injectable({
  providedIn: 'root'
})
export class GiftsServiceService {

  constructor(private http: HttpClient) { }

  public async getAllGifts(): Promise<GiftModel[]>{
    const observable = this.http.get<GiftModel[]>(appConfig.giftURL)
    const gifts = await firstValueFrom(observable)

    return gifts
  }

  public async addNewGift(gift: GiftModel): Promise<void> {
    const observable = this.http.post<GiftModel>(appConfig.giftURL, gift)
    await firstValueFrom(observable)

  }

  public async getAllAudience(): Promise<AudienceModel[]> {

    const observable = this.http.get<AudienceModel[]>(appConfig.audienceURL)
    const audience = await firstValueFrom(observable)

    return audience
  }
}
