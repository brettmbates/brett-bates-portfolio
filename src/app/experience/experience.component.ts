import { Component, OnInit } from '@angular/core';
import { Experience, EXPERIENCE } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceList = EXPERIENCE;

  constructor() { }

  ngOnInit(): void {
  }

}
