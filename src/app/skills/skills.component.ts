import { Component, OnInit } from '@angular/core';
import { Skill, SKILLS } from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsList = SKILLS;

  constructor() { }

  ngOnInit(): void {
  }

}
