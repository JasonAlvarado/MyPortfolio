import { Skill } from './Skill';

export const Skills = {
  frontend: [
    new Skill('Angular', 'angular.png'),
    new Skill('React (in progress)', 'react.png'),
    new Skill('HTML', 'html.png'),
    new Skill('CSS', 'css.png'),
    new Skill('Javascript', 'js.png'),
    new Skill('Bootstrap', 'bootstrap.png'),
  ],
  backend: [
    new Skill('C#', 'c-sharp.png'),
    new Skill('ASP .NET', 'net-framework.png'),
    new Skill('.NET Core', 'net-core.png'),
    new Skill('SQL', 'sql.png'),
    new Skill('Entity framework', 'entity.png'),
  ],
  tools: [
    new Skill('SQL Server', 'sql-server2.png'),
    new Skill('Git', 'git.png'),
    new Skill('Visual studio', 'visual-studio.png'),
    new Skill('Visual studio code', 'vs-code.png'),
    new Skill('Mongo Db', 'mongo-db.png'),
    new Skill('Docker', 'docker.png'),
  ],
};
