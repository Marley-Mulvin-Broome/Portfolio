import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "./ssr.js";
const NavbarLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "#" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="rounded-b-md py-6 px-10 text-emerald-500 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:text-neutral-200 text-xl">${slots.default ? slots.default({}) : ``}</a>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-16w0kkm{background:#171717}@media screen and (min-width: 1280px){nav.sticky.svelte-16w0kkm{top:var(--nav-top)}nav.sticky.svelte-16w0kkm:hover{top:0;opacity:1}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links = [] } = $$props;
  let { sticky = true } = $$props;
  let { stickyThreshold = 0 } = $$props;
  let scrollY = 0;
  let topMinus = 0;
  let opacity = 100;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.sticky === void 0 && $$bindings.sticky && sticky !== void 0)
    $$bindings.sticky(sticky);
  if ($$props.stickyThreshold === void 0 && $$bindings.stickyThreshold && stickyThreshold !== void 0)
    $$bindings.stickyThreshold(stickyThreshold);
  $$result.css.add(css);
  {
    {
      if (scrollY > stickyThreshold && sticky) {
        topMinus = -4;
        opacity = 80;
      } else {
        topMinus = 0;
        opacity = 100;
      }
    }
  }
  return ` <nav${add_attribute("style", `--nav-top: ${topMinus}%;`, 0)} class="${escape(sticky ? `sticky opacity-${opacity}` : "", true) + " mx-auto shadow-lg w-fit flex flex-row justify-center rounded-b-md z-10 transition-all svelte-16w0kkm"}">${each(links, (link) => {
    return `${validate_component(NavbarLink, "NavbarLink").$$render($$result, { href: link.href }, {}, {
      default: () => {
        return `${escape(link.text)} `;
      }
    })}`;
  })} </nav>`;
});
export {
  Navbar as N
};
