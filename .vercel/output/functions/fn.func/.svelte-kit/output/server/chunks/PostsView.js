import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "./ssr.js";
import { T as Tag } from "./Tag.js";
const PostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let { size = "md" } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div class="${escape(size === "sm" ? "max-w-sm" : "max-w-md", true) + " group flex flex-col items-center border rounded border-neutral-700 transition-opacity hover:opacity-80"}"><a${add_attribute("href", `blog/${post.slug}`, 0)}><img${add_attribute("src", post.img, 0)}${add_attribute("alt", `${post.title}`, 0)} class="rounded-t border-b border-neutral-700"> <hgroup><h2 class="text-ellipsis line-clamp-3 text-4xl pt-2 font-bold text-emerald-500 group-hover:text-emerald-400 text-center transition-colors">${escape(post.title)}</h2> <p class="text-neutral-300 pt-1 text-sm text-center">${escape(post.date)}</p></hgroup> <p class="text-white text-lg mt-2 text-left px-4 pb-2">${escape(post.description)}</p> <div class="flex flex-row mx-4 mb-1">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(tag)} `;
      }
    })}`;
  })}</div></a></div>`;
});
const PostsView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  let { size = "md" } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div class="flex flex-row flex-wrap justify-center gap-10 lg:gap-5">${each(posts, (post) => {
    return `${validate_component(PostCard, "PostCard").$$render($$result, { size, post }, {}, {})}`;
  })}</div>`;
});
export {
  PostsView as P
};
