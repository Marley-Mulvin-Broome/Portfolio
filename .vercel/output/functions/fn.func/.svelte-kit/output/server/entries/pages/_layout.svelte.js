import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#1c1c1c;color:#fff}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1lkfh0n_START -->${$$result.title = `<title>Marley Mulvin Broome</title>`, ""}<meta name="description" content="Marley Mulvin Broome is a web developer and current student at the University of New South Wales. Fluent in both Japanese and English."><meta name="keywords" content="marley, mulvin, broome, web, web developer, programmer, hire web, hire developer, website creation, app, dev, github, github stats, hire dev, junior"><meta name="author" content="Marley Mulvin Broome, marley.developer@gmail.com"><meta name="language" content="en"><meta name="robots" content="index,follow"><meta name="revised" content="Sunday, August 13th, 2023, 17:20 pm"><meta charset="utf-8"><meta name="og:title" content="Web Developer Marley Mulvin Broome's Profile"><meta name="og:description" content="Marley Mulvin Broome is a web developer and current student at the University of New South Wales. Fluent in both Japanese and English."><meta name="og:image" content="https://avatars.githubusercontent.com/u/20318132?v=4"><meta name="og:email" content="marley.developer@gmail.com"><!-- HEAD_svelte-1lkfh0n_END -->`, ""} <div>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
