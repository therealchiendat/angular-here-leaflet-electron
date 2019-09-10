import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HereMapComponent } from "../here-map/here-map.component";

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.css']
})
export class NearbyComponent implements OnInit {
  @ViewChild("map", { static: false })
  public mapElement: HereMapComponent;

  public ngOnInit() { }

  public ngAfterViewInit() {
    this.mapElement.dropMarker("oromocto, nb");
    this.mapElement.dropMarker("fredericton, nb");
  }

}
