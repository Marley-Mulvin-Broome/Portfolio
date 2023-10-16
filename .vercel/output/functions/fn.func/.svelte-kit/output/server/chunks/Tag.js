import { c as create_ssr_component, e as escape } from "./ssr.js";
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes = "" } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<p class="${escape(classes, true) + " rounded-md bg-emerald-600 text-white px-2 py-1 text-sm mr-2 mb-2"}">${slots.default ? slots.default({}) : ``}</p>`;
});
export {
  Tag as T
};
