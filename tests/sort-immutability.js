import { sortProjects } from '../src/project-utils.js';

const projects = [{ title: 'Zeta' }, { title: 'Alpha' }];
const before = JSON.stringify(projects);
sortProjects(projects, 'title-asc');
const passed = JSON.stringify(projects) === before;
console.log((passed ? 'PASS ' : 'FAIL ') + 'sorting leaves source data unchanged');
if (!passed) process.exitCode = 1;
