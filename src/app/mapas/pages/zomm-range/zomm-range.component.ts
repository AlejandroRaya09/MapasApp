import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zomm-range',
  templateUrl: './zomm-range.component.html',
  styleUrls: ['./zomm-range.component.css'],
})
export class ZommRangeComponent implements AfterViewInit, OnDestroy{
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center:[number,number]=[-100.41558119881738, 25.681186028826346]

  constructor() {}

  ngOnDestroy(): void {
    this.mapa.off('zoom', () =>{});
    this.mapa.off('zoomend', () =>{});
    this.mapa.off('move', () =>{});
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      //longitud y latitud
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (ev) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });

    //movimiento del mapa
    this.mapa.on('move', (event) =>{
      const target = event.target
      const {lng,lat} = target.getCenter();
      this.center = [lng, lat]
    })

  }

  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }

  zoomCambio(valor:string){
    this.mapa.zoomTo(Number(valor))
  }
}
