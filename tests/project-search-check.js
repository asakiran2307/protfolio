import { filterProjects } from '../src/project-utils.js';
const result = filterProjects([{ title: 'Alpha' }], 'alpha').length === 1;
console.log(result ? 'PASS project search' : 'FAIL project search');
if (!result) process.exitCode = 1;
