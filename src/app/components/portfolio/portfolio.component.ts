import { Projects } from './../../models/projects';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  public projects: any;

  constructor() {
    this.projects = Projects;
  }

  ngOnInit(): void {}
}
