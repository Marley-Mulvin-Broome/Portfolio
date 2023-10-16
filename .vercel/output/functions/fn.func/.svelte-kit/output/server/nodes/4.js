import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.f6ed3659.js","_app/immutable/chunks/scheduler.68e3df67.js","_app/immutable/chunks/index.ed6dfa59.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Tag.03822683.js","_app/immutable/chunks/SectionTitle.3fbbe504.js","_app/immutable/chunks/index.338842ea.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.68205f7b.js","_app/immutable/chunks/PostsView.338bf16e.js"];
export const stylesheets = ["_app/immutable/assets/4.8999e24d.css"];
export const fonts = [];
