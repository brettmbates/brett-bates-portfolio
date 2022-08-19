import { Component, OnInit } from '@angular/core';
import { Certification, CERTIFICATIONS } from './certifications';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  
  certificationList = CERTIFICATIONS;
  
  constructor() { }

  ngOnInit(): void {
  }

  selectedCertification?: Certification;
  onMouseOver(certification: Certification): void {
    this.selectedCertification = certification;
  }
  onMouseOut(): void {
    delete this.selectedCertification;  
  }
}
