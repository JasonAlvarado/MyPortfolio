import { PortfolioService } from '../../services/portfolio.service';
import { Project } from './../../models/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [PortfolioService],
})
export class PortfolioComponent implements OnInit {
  public projects: Project[];
  public description: string;

  constructor(private portfolioService: PortfolioService) {
    this.description =
      'Here you can watch my projects. The main area of my experience is .NET Framework / Core. But I also have projects in MEAN & MERN stack';
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = this.portfolioService.getAllProjects();
  }
}
