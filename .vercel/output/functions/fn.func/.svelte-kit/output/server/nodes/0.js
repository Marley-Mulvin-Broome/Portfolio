import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.5237d4c2.js","_app/immutable/chunks/scheduler.68e3df67.js","_app/immutable/chunks/index.ed6dfa59.js","_app/immutable/chunks/index.338842ea.js"];
export const stylesheets = ["_app/immutable/assets/0.fa82b7db.css"];
export const fonts = [];
