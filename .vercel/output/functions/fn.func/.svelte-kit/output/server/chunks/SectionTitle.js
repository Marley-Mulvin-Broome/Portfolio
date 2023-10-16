import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<h2${add_attribute("id", id, 0)} class="lg:text-7xl text-3xl font-bold text-emerald-500">${slots.default ? slots.default({}) : ``}</h2>`;
});
export {
  SectionTitle as S
};
