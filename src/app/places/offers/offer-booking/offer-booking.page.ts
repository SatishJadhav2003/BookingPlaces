import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private _placeService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      if(!paramMap.get('placeId'))
      {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this._placeService.getPlace(paramMap.get('placeId'))
    })
  }
}
