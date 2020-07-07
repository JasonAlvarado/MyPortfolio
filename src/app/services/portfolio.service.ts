import { Project } from './../models/project';
import { Projects } from '../models/projects';
import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
  getAllProjects(): Project[] {
    return Projects;
  }
}
