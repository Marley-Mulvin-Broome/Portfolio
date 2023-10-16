

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.74f8c78d.js","_app/immutable/chunks/scheduler.68e3df67.js","_app/immutable/chunks/index.ed6dfa59.js","_app/immutable/chunks/Navbar.e26e7285.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/Navbar.e5db1ac2.css"];
export const fonts = [];
