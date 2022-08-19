import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Personal-Portfolio';
  _certDetails:String;
  
  constructor() {
    this._certDetails = 'CERTDETAILS';
  }

  get certDetails():String {
    return this.certDetails;
  }

  set certDetails(val:String) {
    this.certDetails = val;
  }
}
