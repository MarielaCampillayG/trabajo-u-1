import { Component, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements AfterViewInit {
  map: any;

  constructor() {}

  ngAfterViewInit() {
    // No need to initialize the map here
  }

  async loadMap() {
    const position = await Geolocation.getCurrentPosition();

    const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'You are here!'
    });
  }
}
