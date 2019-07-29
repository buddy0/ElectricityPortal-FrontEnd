import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  providers: [ MapService ],
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 15.3173;
  lng: number = 75.7139;

  dname: string;
  demand: number;
  supply: number;
  downtime: number;

  constructor(public mapService:MapService) {
      this.showDetails2('Bagalkot');
   }

  ngOnInit() {
  }

  /*showDetails(a) {
    if(a=='Dharwad'){
      this.dharwad=true;
      this.dname="Dharwad";
    }
    else if(a=='Bagalkot'){
      this.bagalkot=true;
      this.dname="Bagalkot";
    }
    else if(a=='Raichur'){
      this.raichur=true;
      this.dname="Raichur";
    }
    else if(a=='Belgaum'){
      this.belgaum=true;
      this.dname="Belgaum";
    }
    else{
      this.bellary=true;
      this.dname="Bellary";
    }
    alert(a);
  } */

  showDetails2(a) {

    this.mapService.getData(a)
    .subscribe(
      (data) => { this.demand=data["demand"];
                  this.supply=data["supply"];
                  this.downtime=data["downtime"];
                  this.dname=data["name"];
         }, // success path
    );

  }
}
