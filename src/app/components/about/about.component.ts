import { Skill } from './../../models/Skill';
import { Skills } from '../../models/skillList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public frontend: Skill[];
  public backend: Skill[];
  public tools: Skill[];

  constructor() {
    this.frontend = Skills.frontend;
    this.backend = Skills.backend;
    this.tools = Skills.tools;
  }

  ngOnInit(): void {}
}
