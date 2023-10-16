import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="p-40 align-middle text-center flex justify-center flex-col"><h1 class="text-emerald-500 text-4xl p-10">Error ${escape($page.status)}: ${escape($page.error?.message)}</h1> <a class="text-xl hover:opacity-80" href="/" data-svelte-h="svelte-2o5ecl">Go home...</a></div>`;
});
export {
  Error$1 as default
};
