import { filterProjects, getProjectCategories, sortProjects } from '../src/project-utils.js';

const projects = [
  { title: 'Campus Cyber Escape', season: 'CYBERSECURITY', description: 'QR-guided challenge', tech: ['React', 'QR Flow'] },
  { title: 'Café Map', season: 'MOBILITY', description: 'Campus transport routes', tech: ['Navigation', 'Maps'] },
  { title: 'Finance Sanna', season: 'FINTECH', description: 'Portfolio and risk research', tech: ['Data Viz', 'APIs'] },
  { title: 'NotifyVault', season: 'NOTIFICATIONS', description: 'Captured notification history', tech: ['Android'] }
];

const failures = [];
function check(name, actual, expected) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log((passed ? 'PASS ' : 'FAIL ') + name);
  if (!passed) {
    console.error('  expected:', JSON.stringify(expected));
    console.error('  received:', JSON.stringify(actual));
    failures.push(name);
  }
}

check('unique categories preserve first-seen order', getProjectCategories([...projects, projects[0]]), ['All', 'CYBERSECURITY', 'MOBILITY', 'FINTECH', 'NOTIFICATIONS']);
check('empty list returns All category', getProjectCategories([]), ['All']);
check('invalid list returns All category', getProjectCategories(null), ['All']);
check('empty search returns all projects', filterProjects(projects).map(p => p.title), projects.map(p => p.title));
check('search matches title', filterProjects(projects, 'campus cyber').map(p => p.title), ['Campus Cyber Escape']);
check('search matches description', filterProjects(projects, 'notification history').map(p => p.title), ['NotifyVault']);
check('search matches technology', filterProjects(projects, 'data viz').map(p => p.title), ['Finance Sanna']);
check('search ignores accents', filterProjects(projects, 'cafe').map(p => p.title), ['Café Map']);
check('category filter narrows results', filterProjects(projects, '', 'MOBILITY').map(p => p.title), ['Café Map']);
check('search and category work together', filterProjects(projects, 'maps', 'MOBILITY').map(p => p.title), ['Café Map']);
check('non-matching search and category returns empty', filterProjects(projects, 'maps', 'FINTECH'), []);
check('sort A-Z', sortProjects(projects, 'title-asc').map(p => p.title), ['Café Map', 'Campus Cyber Escape', 'Finance Sanna', 'NotifyVault']);
check('sort Z-A', sortProjects(projects, 'title-desc').map(p => p.title), ['NotifyVault', 'Finance Sanna', 'Campus Cyber Escape', 'Café Map']);
check('featured order is preserved', sortProjects(projects, 'featured').map(p => p.title), projects.map(p => p.title));
check('sort does not mutate input', projects.map(p => p.title), ['Campus Cyber Escape', 'Café Map', 'Finance Sanna', 'NotifyVault']);
check('incomplete records are handled', filterProjects([{}, { title: 'Other', tech: [] }], 'other').map(p => p.title), ['Other']);
check('invalid project list sorts to empty', sortProjects(null), []);

if (failures.length) {
  console.error(failures.length + ' check(s) failed.');
  process.exitCode = 1;
} else {
  console.log('All 17 project utility checks passed.');
}
