import * as universal from '../entries/pages/projects/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.ts";
export const imports = ["_app/immutable/nodes/7.8072b830.js","_app/immutable/chunks/scheduler.68e3df67.js","_app/immutable/chunks/index.ed6dfa59.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/SectionTitle.3fbbe504.js"];
export const stylesheets = [];
export const fonts = [];
