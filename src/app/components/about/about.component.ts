import { Skills } from './../../models/skills';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public skills: any;

  constructor() {
    this.skills = Skills;
  }

  ngOnInit(): void {}
}
