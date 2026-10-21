const normalize = value => String(value ?? '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

export function getProjectCategories(projects = []) {
  const categories = [];
  const seen = new Set();
  for (const project of Array.isArray(projects) ? projects : []) {
    const category = String(project?.season || 'Other').trim() || 'Other';
    if (!seen.has(category)) {
      seen.add(category);
      categories.push(category);
    }
  }
  return ['All', ...categories];
}

export function filterProjects(projects = [], query = '', category = 'All') {
  const list = Array.isArray(projects) ? projects : [];
  const needle = normalize(query).trim();
  return list.filter(project => {
    const projectCategory = String(project?.season || 'Other').trim() || 'Other';
    if (category && category !== 'All' && projectCategory !== category) return false;
    if (!needle) return true;
    const searchable = [
      project?.title,
      project?.season,
      project?.description,
      ...(Array.isArray(project?.tech) ? project.tech : [])
    ].map(normalize).join(' ');
    return searchable.includes(needle);
  });
}

export function sortProjects(projects = [], order = 'featured') {
  const list = Array.isArray(projects) ? [...projects] : [];
  if (order !== 'title-asc' && order !== 'title-desc') return list;
  const direction = order === 'title-asc' ? 1 : -1;
  return list.sort((a, b) => String(a?.title || '').localeCompare(String(b?.title || ''), undefined, { sensitivity: 'base' }) * direction);
}
