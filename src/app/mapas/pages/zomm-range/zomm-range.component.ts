import {AfterViewInit,Component,ElementRef,ViewChild} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zomm-range',
  templateUrl: './zomm-range.component.html',
  styleUrls: ['./zomm-range.component.css'],
})
export class ZommRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  
  constructor() {}

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      //longitud y latitud
      center: [-100.41558119881738, 25.681186028826346],
      zoom: this.zoomLevel,
    });

  }

  zoomOut() {
    this.mapa.zoomOut();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomIn() {
    this.mapa.zoomIn();
    this.zoomLevel = this.mapa.getZoom();
  }
}
