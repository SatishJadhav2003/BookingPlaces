import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public _places: Place[] = [
    new Place(
      '1',
      'Shalimar',
      'Shalimar is best for buget friedly shopping',
      'https://imgs.search.brave.com/OJbYo2fKwpGV1t-YeeSy33Llj38j45XQBdQPIqE01qs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTYzNTIxMTY2ODIt/NTJkNzk0MWFmZDUz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TWpCOGZH/NWhkSFZ5WlNVeU1H/bHRZV2RsYzN4bGJu/d3dmSHd3Zkh4OE1B/PT0',
      1299
    ),
    new Place(
      '2',
      'Shalimar',
      'Shalimar is best for buget friedly shopping',
      'https://imgs.search.brave.com/OJbYo2fKwpGV1t-YeeSy33Llj38j45XQBdQPIqE01qs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTYzNTIxMTY2ODIt/NTJkNzk0MWFmZDUz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TWpCOGZH/NWhkSFZ5WlNVeU1H/bHRZV2RsYzN4bGJu/d3dmSHd3Zkh4OE1B/PT0',
      1299
    ),
    new Place(
      '4',
      'Shalimar',
      'Shalimar is best for buget friedly shopping',
      'https://imgs.search.brave.com/OJbYo2fKwpGV1t-YeeSy33Llj38j45XQBdQPIqE01qs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTYzNTIxMTY2ODIt/NTJkNzk0MWFmZDUz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TWpCOGZH/NWhkSFZ5WlNVeU1H/bHRZV2RsYzN4bGJu/d3dmSHd3Zkh4OE1B/PT0',
      1299
    ),
    new Place(
      '5',
      'Shalimar',
      'Shalimar is best for buget friedly shopping',
      'https://imgs.search.brave.com/OJbYo2fKwpGV1t-YeeSy33Llj38j45XQBdQPIqE01qs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTYzNTIxMTY2ODIt/NTJkNzk0MWFmZDUz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TWpCOGZH/NWhkSFZ5WlNVeU1H/bHRZV2RsYzN4bGJu/d3dmSHd3Zkh4OE1B/PT0',
      1299
    ),
  ];

  constructor() {}

  getPlaces() {
    return [...this._places];
  }

  getPlace(id)
  {
    return this._places.find((place)=> place.id=== id);
  }
}
