import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
    { href: "/projects", text: "Projects" }
  ];
  return `${validate_component(Navbar, "Navbar").$$render($$result, { links }, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
