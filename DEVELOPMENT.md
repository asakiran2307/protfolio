# Development notes

## Project discovery features

The Projects section now supports keyword search across project titles, category labels, descriptions and technology tags. Category buttons are derived from the project data, and the sort selector offers featured order, title A–Z and title Z–A.

Each project card has a Details action that opens an accessible dialog with a description, technology tags, and available live/source links. The dialog supports Escape to close, backdrop dismissal, focus containment, and focus restoration. The contact section adds a copy-email action with a clear status when clipboard access is blocked.

## Source of truth

Portfolio content remains in `src/data.js`. Filtering, category extraction and sorting are isolated in `src/project-utils.js`, so they can be tested independently of React rendering.

## Verification

Run the utility checks with Node.js by executing `tests/project-utils.test.js` and `tests/project-search-check.js`. The production build is handled by the existing Vite build script. The project currently has no package lockfile or configured linter/typechecker; do not treat a successful Vite build as a substitute for those checks.

## Deployment safety

Preview deployments should be reviewed before merge. The Vercel project has SSO protection on preview URLs, so direct browser smoke tests may require an authenticated session. Production was not changed as part of this branch.
