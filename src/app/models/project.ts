export class Project {
  constructor(
    public title: string,
    public year: number,
    public image: string,
    public description: string,
    public liveLink: string,
    public codeLink: string,
    public skills: string[]
  ) {}
}
