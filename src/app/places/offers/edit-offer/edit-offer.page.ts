import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place:Place;
  constructor(
    private route: ActivatedRoute,
    private _placesService: PlacesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((route)=>{
      if(!route.get('placeId'))
      {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      else
      {
       this.place =  this._placesService.getPlace(route.get('placeId'));
      }
    })
  }

  
}
