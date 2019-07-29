import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MapService {
     constructor(public http: HttpClient) { }

     infoUrl='http://localhost:8080/DistrictInfo/';

     getData(a) {
       this.infoUrl='http://localhost:8080/DistrictInfo/';
       this.infoUrl=this.infoUrl.concat(a);
       return this.http.get(this.infoUrl);
     }
}
