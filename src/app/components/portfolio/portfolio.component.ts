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

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = this.portfolioService.getAllProjects();
  }
}
