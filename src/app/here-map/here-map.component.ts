import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var L: any;

@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

  @ViewChild("map", {static:false})
  public mapElement: ElementRef;

  @Input("appId")
  public appId: string;

  @Input("appCode")
  public appCode: string;

  private map: any;
  public srcTiles: string;
  public height: string;

  public constructor(private http: HttpClient) {
    this.height = window.innerHeight-95 + "px";
  }

  public ngOnInit() {
    this.srcTiles = "https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?app_id=" + this.appId + "&app_code=" + this.appCode + "&ppi=320";
  }

  public ngAfterViewInit() {
    this.map = L.map(this.mapElement.nativeElement, {
      center: [45.9644093, -66.6397244],
      zoom: 14,
      layers: [L.tileLayer(this.srcTiles)],
      zoomControl: true
    });
  }

  public dropMarker(address: string) {
    this.http.get("https://geocoder.api.here.com/6.2/geocode.json", {
      params: {
        app_id: this.appId,
        app_code: this.appCode,
        searchtext: address
      }
    }).subscribe(result => {
      const location = result['Response']['View'][0]['Result'][0]['Location']['DisplayPosition'];
      const marker = new L.Marker([location['Latitude'], location['Longitude']]);
      marker.addTo(this.map);
    });
  }

}
