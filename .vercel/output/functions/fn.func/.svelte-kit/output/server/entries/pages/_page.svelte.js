import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component, h as createEventDispatcher, i as is_promise, n as noop } from "../../chunks/ssr.js";
import { T as Tag } from "../../chunks/Tag.js";
import { S as SectionTitle } from "../../chunks/SectionTitle.js";
import { S as SkillCategory } from "../../chunks/skill.js";
import "devalue";
import { p as public_env } from "../../chunks/shared-server.js";
import { P as PostsView } from "../../chunks/PostsView.js";
const Emphasis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<span class="text-emerald-400">${slots.default ? slots.default({}) : ``}</span>`;
});
const LinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { externalLink = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.externalLink === void 0 && $$bindings.externalLink && externalLink !== void 0)
    $$bindings.externalLink(externalLink);
  return `${externalLink ? `<a data-sveltekit-noscroll${add_attribute("href", href, 0)} target="_blank" rel="noopener noreferrer" class="text-xl text-emerald-400 hover:text-emerald-300 transition-all underline underline-offset-4 decoration-2 hover:text-">${slots.default ? slots.default({}) : ``}</a>` : `<a data-sveltekit-noscroll${add_attribute("href", href, 0)} class="text-xl text-emerald-400 hover:text-emerald-300 transition-all underline underline-offset-4 decoration-2 hover:text-">${slots.default ? slots.default({}) : ``}</a>`}`;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile = false;
  let { item = {
    name: "Name",
    description: "Description",
    image: "",
    tags: []
  } } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<li class="text-left rounded-md p-3 lg:hover:translate-x-2 cursor-pointer transition-transform shadow bg-none lg:hover:bg-gradient-to-b lg:hover:from-emerald-600"><p class="sm:text-m text-3xl underline decoration-4 underline-offset-8 decoration-white-700">${escape(item.name)}</p> ${item.image && isMobile ? `<img class="mt-4 rounded opacity-95"${add_attribute("src", item.image, 0)} alt="${"Image of " + escape(item.name, true)}">` : ``} ${item.video && !isMobile ? `<video defaultmuted playsinline muted autoplay loop class="mt-4 rounded opacity-95"><source${add_attribute("src", item.video, 0)} type="video/webm"></video>` : ``} <p class="mt-2">${escape(item.description)}</p> ${item.tags ? `<div class="mt-2 flex flex-row flex-wrap">${each(item.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(tag)}`;
      }
    })}`;
  })}</div>` : ``}</li>`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<ul class="list-none grid md:grid-cols-3 md:gap-4 grid-cols-1">${each(items, (item) => {
    return `${validate_component(ListItem, "ListItem").$$render($$result, { item }, {}, {})}`;
  })}</ul>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes = "" } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<div class="${"flex flex-col items-center min-h-screen mt-56 2xl:mt-0 " + escape(classes, true)}">${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.title ? slots.title({}) : ``}`;
    }
  })} <div class="text-neutral-300 mt-2 text-center">${slots.subtitle ? slots.subtitle({}) : ``}</div> <div class="container mx-auto">${slots.content ? slots.content({}) : ``}</div></div>`;
});
const SkillDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { skill } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  return `<img loading="lazy" decoding="async" class="mb-1 mx-auto" src="${"skills/" + escape(skill.icon, true)}"${add_attribute("alt", skill.name, 0)} width="100" height="100"> <h3 class="text-center text-xl align-middle">${escape(skill.name)}</h3> <p>${escape(skill.description)}</p> <div class="flex flex-row flex-wrap mt-2 lg:justify-normal justify-center">${each(skill.categories, (category) => {
    return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(category)}`;
      }
    })}`;
  })} ${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(skill.experience)} year(s) of experience`;
    }
  })}</div>`;
});
const SkillListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { skill } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  return `<div><div role="button" tabindex="-1" class="group cursor-pointer hover:bg-opacity-10 hover:bg-emerald-300 grid grid-cols-1 p-1"><img class="${"mb-1 mx-auto group-hover:opacity-90 " + escape(skill.imgStyling ?? "", true)}" src="${"skills/" + escape(skill.icon, true)}"${add_attribute("alt", skill.name, 0)} width="50" height="50"> <p class="text-center">${escape(skill.name)}</p></div></div>`;
});
const SkillToggleButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggled = false } = $$props;
  createEventDispatcher();
  let currentClasses = "";
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  {
    if (toggled) {
      currentClasses = "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white";
    } else {
      currentClasses = "hover:bg-emerald-500 hover:bg-opacity-50";
    }
  }
  return `<button class="${"transition border-emerald-500 border-2 rounded p-1 " + escape(currentClasses, true)}">${slots.default ? slots.default({}) : ``}</button>`;
});
const SkillList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categoryString;
  let { skills = [] } = $$props;
  let { Categories = [] } = $$props;
  let { possibleCategories = Object.values(SkillCategory) } = $$props;
  let selectedSkill = skills.length > 0 ? skills[0] : null;
  const sortSkills = (a, b) => {
    if (a.experience === b.experience) {
      return a.name.localeCompare(b.name);
    }
    return b.experience - a.experience;
  };
  const getSkillsWithCategories = (categories) => {
    if (categories.length === 0)
      return skills.sort(sortSkills);
    return skills.filter((skill) => {
      for (const category of categories) {
        if (!skill.categories.includes(category)) {
          return false;
        }
      }
      return true;
    }).sort(sortSkills);
  };
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0)
    $$bindings.skills(skills);
  if ($$props.Categories === void 0 && $$bindings.Categories && Categories !== void 0)
    $$bindings.Categories(Categories);
  if ($$props.possibleCategories === void 0 && $$bindings.possibleCategories && possibleCategories !== void 0)
    $$bindings.possibleCategories(possibleCategories);
  categoryString = Categories.length > 0 ? Categories.join(", ") : "All Skills";
  return `<div class="grid xl:grid-cols-3 grid-row-1 xl:mt-20 mt-2 gap-4"><div class="xl:col-span-1 xl:order-1 order-2"><div class="lg:block hidden"><h3 class="text-2xl text-center text-emerald-400" data-svelte-h="svelte-3ct4w9">Categories</h3> <p class="text-center text-neutral-300" data-svelte-h="svelte-pqkr1t">Click a category to filter</p> <div class="mt-2 flex flex-wrap gap-2">${each(possibleCategories, (category) => {
    return `${validate_component(SkillToggleButton, "SkillToggleButton").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(category)}`;
      }
    })}`;
  })}</div></div> <div class="mt-2 md:mx-0 lg:text-left text-center">${selectedSkill ? `${validate_component(SkillDisplay, "SkillDisplay").$$render($$result, { skill: selectedSkill }, {}, {})}` : ``}</div></div> <div class="col-span-2"><h3 class="text-2xl text-center text-emerald-400 xl:block hidden">${escape(categoryString)}</h3> <p class="text-center text-neutral-300" data-svelte-h="svelte-1antriy">Click a skill to view more details</p> <div class="grid grid-cols-4 mt-7">${each(getSkillsWithCategories(Categories), (skill) => {
    return `${validate_component(SkillListItem, "SkillListItem").$$render($$result, { skill }, {}, {})}`;
  })}</div></div></div>`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { events } = $$props;
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  return `<ol class="relative border-l border-gray-200 dark:border-gray-700">${each(events, (event) => {
    return `<li class="mb-10 ml-4"><div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-gray-500">${escape(event.date)}</time> <h3 class="text-lg font-semibold text-white">${escape(event.title)}</h3> <p class="mb-4 text-base font-normal text-gray-400">${escape(event.text)}</p> </li>`;
  })}</ol>`;
});
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="lg:text-8xl lg:text-left text-4xl text-center font-bold text-emerald-500">${slots.title ? slots.title({}) : ``}</h1> <p class="mt-2 lg:text-left text-center">${slots.description ? slots.description({}) : ``}</p>`;
});
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fillColour = "fill-gray-300" } = $$props;
  if ($$props.fillColour === void 0 && $$bindings.fillColour && fillColour !== void 0)
    $$bindings.fillColour(fillColour);
  return `<div role="status"><svg aria-hidden="true" class="${"inline w-8 h-8 mr-2 animate-spin text-gray-600 " + escape(fillColour, true)}" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div>`;
});
const GithubSearchbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<form><div class="flex"><label for="github-search" class="mb-2 text-sm font-medium sr-only text-white" data-svelte-h="svelte-1stzpf2">Your Email</label> <div class="relative w-full"><input type="search" id="github-search" class="block p-2.5 w-full z-20 text-sm rounded-r-lg bg-transparent outline-none focus:outline-none border-b-2 transition-all border-neutral-400 focus:border-neutral-200" placeholder="Search Github Username" required${add_attribute("value", value, 0)}> <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-emerald-600 rounded-r-lg border border-emerald-700 hover:bg-emerald-800 focus:ring-2 focus:outline-none focus:ring-blue-300 " data-svelte-h="svelte-1xmj18"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg> <span class="sr-only">Search</span></button></div></div></form>`;
});
const GithubUserCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { login = "" } = $$props;
  let { name } = $$props;
  let { avatarUrl = "" } = $$props;
  let { bio = "" } = $$props;
  createEventDispatcher();
  if ($$props.login === void 0 && $$bindings.login && login !== void 0)
    $$bindings.login(login);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.avatarUrl === void 0 && $$bindings.avatarUrl && avatarUrl !== void 0)
    $$bindings.avatarUrl(avatarUrl);
  if ($$props.bio === void 0 && $$bindings.bio && bio !== void 0)
    $$bindings.bio(bio);
  return `<div role="button" tabindex="-1" class="select-none flex flex-row gap-2 p-2 my-2 h-24 bg-gradient-to-br cursor-pointer hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 rounded-xl"><img decoding="async" class="w-20 h-20 rounded-full" placeholder="identicon.png"${add_attribute("src", avatarUrl, 0)} width="80" height="80" alt="${escape(login, true) + "'s Github Profile"}"> <div class="flex flex-col"><p class="text-base">${escape(name ?? "")}</p> <p class="text-sm text-gray-300">${escape(login)}</p> <p class="overflow-ellipsis line-clamp-1">${escape(bio ?? "")}</p></div></div>`;
});
const GithubSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let searchTerm = "";
  const search = async (query) => {
    if (query == "") {
      return { nodes: [] };
    }
    const response = await fetch(`/api/github/search?searchString=${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="rounded mt-2 w-10/12 md:w-2/3 mx-auto lg:w-1/3 p-2 ">${validate_component(GithubSearchbar, "GithubSearchbar").$$render(
      $$result,
      { value: searchTerm },
      {
        value: ($$value) => {
          searchTerm = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="container md:h-80 h-40 pt-2">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <div class="flex justify-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div> `;
      }
      return function(results) {
        return ` ${each(results.nodes, (userNode) => {
          return `${Object.keys(userNode).length > 0 ? `${validate_component(GithubUserCard, "GithubUserCard").$$render(
            $$result,
            {
              login: userNode.login,
              name: userNode.name,
              avatarUrl: userNode.avatarUrl,
              bio: userNode.bio
            },
            {},
            {}
          )}` : ``}`;
        })} `;
      }(__value);
    }(search(searchTerm))}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
async function getUserData(username) {
  username = username ?? "torvalds";
  const response = await fetch(`/api/github?username=${username}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
const GithubStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { canSearch = true } = $$props;
  let currentUsername = "Marley-Mulvin-Broome";
  let githubPromise = getUserData(currentUsername);
  if ($$props.canSearch === void 0 && $$bindings.canSearch && canSearch !== void 0)
    $$bindings.canSearch(canSearch);
  return `<div class="w-10/12 md:w-2/3 lg:w-1/3 h-fit mx-auto bg-gradient-to-br rounded-lg p-4 from-emerald-500 to-emerald-700">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="flex justify-center h-48 items-center">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}</div> `;
    }
    return function(user) {
      return ` <div class="flex gap-4"><div class="min-w-fit justify-self-center"><img class="rounded-full self-center" alt="${escape(user.name, true) + " github profile"}" width="130" height="130"${add_attribute("src", user.avatarUrl, 0)}></div> <div class=""><h3 class="text-xl md:text-2xl text-gray-200 font-bold">${escape(user.name ?? "No name")}</h3>  <p class="md:text-base text-gray-300">${escape(currentUsername)}</p>  <p class="text-ellipsis">${escape(user.bio ?? "")}</p></div></div> <aside class="grid text-center grid-cols-3 grid-rows-1 mt-4"><p class="">${escape(user.followers.totalCount)} Followers</p> <p>${escape(user.following.totalCount)} Following</p> <a class="underline hover:opacity-80 transition-opacity" href="${"https://github.com/" + escape(currentUsername, true) + "?tab=repositories"}" target="_blank" rel="noopener noreferrer">${escape(user.repositories.totalCount)} Repositories</a></aside> <p class="text-center text-lg font-semibold mt-4">Total Contributions: ${escape(user.contributionsCollection.contributionCalendar.totalContributions)}</p> <div class="grid grid-cols-3 grid-rows-1 mt-2"><button class="text-center underline" aria-label="Reload" data-svelte-h="svelte-1di9ytg">Reload</button> <a href="${"https://github.com/" + escape(currentUsername, true)}" class="col-start-3 text-center underline" target="_blank" rel="noopener noreferrer">Follow</a></div> `;
    }(__value);
  }(githubPromise)}</div> ${canSearch ? `${validate_component(GithubSearch, "GithubSearch").$$render($$result, {}, {}, {})}` : ``}`;
});
const ReCaptcha = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { SITE_KEY } = $$props;
  let { captchaStyle = { theme: "light", size: "normal" } } = $$props;
  const getRecaptchaResponse = () => {
    return grecaptcha.getResponse();
  };
  if ($$props.SITE_KEY === void 0 && $$bindings.SITE_KEY && SITE_KEY !== void 0)
    $$bindings.SITE_KEY(SITE_KEY);
  if ($$props.captchaStyle === void 0 && $$bindings.captchaStyle && captchaStyle !== void 0)
    $$bindings.captchaStyle(captchaStyle);
  if ($$props.getRecaptchaResponse === void 0 && $$bindings.getRecaptchaResponse && getRecaptchaResponse !== void 0)
    $$bindings.getRecaptchaResponse(getRecaptchaResponse);
  return `${$$result.head += `<!-- HEAD_svelte-gd1cy_START --><script src="https://www.google.com/recaptcha/api.js" async defer data-svelte-h="svelte-189w41j"><\/script><!-- HEAD_svelte-gd1cy_END -->`, ""} ${`<div class="g-recaptcha"${add_attribute("data-sitekey", SITE_KEY, 0)}${add_attribute("data-theme", captchaStyle.theme, 0)}${add_attribute("data-size", captchaStyle.size, 0)}></div>`}`;
});
var FormStatus = /* @__PURE__ */ ((FormStatus2) => {
  FormStatus2["Idle"] = "idle";
  FormStatus2["Success"] = "success";
  FormStatus2["Loading"] = "loading";
  FormStatus2["Error"] = "error";
  FormStatus2["Missing"] = "missing";
  return FormStatus2;
})(FormStatus || {});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action = "" } = $$props;
  let formStatus = FormStatus.Idle;
  let name = "";
  let email = "";
  let errorBody = "";
  let SITE_KEY = public_env.PUBLIC_CAPTCHA_KEY;
  let Captcha;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${formStatus === FormStatus.Idle ? `<div class="mx-auto max-w-screen-md"><form class="grid grid-cols-1" method="POST"${add_attribute("action", action, 0)}><div class="mb-4"><label class="block text-lg" for="nameInput" data-svelte-h="svelte-1ei0mww">Your Name</label> <input class="bg-transparent border-b-2 border-emerald-700 block w-full focus:border-emerald-500 focus:outline-none" required type="text" name="nameInput" id="nameInput" placeholder="Marley Mulvin Broome @ Freelight Software"${add_attribute("value", name, 0)}></div> <div class="mb-4"><label class="block text-lg" for="emailInput" data-svelte-h="svelte-8ql77e">Your Email</label> <input class="bg-transparent border-b-2 border-emerald-700 block w-full focus:border-emerald-500 focus:outline-none" required type="email" name="emailInput" id="emailInput" placeholder="marley.developer@gmail.com"${add_attribute("value", email, 0)}></div> <div class="mb-4" data-svelte-h="svelte-lagh0n"><label class="block text-lg" for="messageInput">Your Message</label> <textarea rows="6" class="bg-transparent border-b-2 border-emerald-700 block w-full focus:border-emerald-500 focus:outline-none" required name="messageInput" id="messageInput" placeholder="Leave a comment..."></textarea></div> <div class="mx-auto mb-4">${validate_component(ReCaptcha, "ReCaptcha").$$render(
      $$result,
      {
        SITE_KEY,
        captchaStyle: { theme: "dark", size: "normal" },
        this: Captcha
      },
      {
        this: ($$value) => {
          Captcha = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <button class="rounded border-2 border-white w-20 mx-auto hover:bg-white hover:text-black transition-colors" type="submit" data-svelte-h="svelte-bnikw9">Send</button></form></div>` : `${formStatus === FormStatus.Loading ? `<div class="w-full h-96"><div class="flex justify-center align-middle">${validate_component(Spinner, "Spinner").$$render($$result, { fillColour: "fill-emerald-500" }, {}, {})}</div></div>` : `${formStatus === FormStatus.Success ? `<div class="flex flex-col justify-center"><p class="text-center self-center" data-svelte-h="svelte-9ipf76">Message sent!</p> <button class="rounded border-2 border-white w-fit p-1 mx-auto hover:bg-white hover:text-black transition-colors" data-svelte-h="svelte-140akmm">Send another message</button></div>` : `<div class="mx-auto text-center lg:w-fit h-96"><h3 class="text-4xl font-medium mb-2" data-svelte-h="svelte-1isjp9h">Oops ...</h3> <p class="text-xl pb-2">${escape(errorBody)}</p> <button class="rounded border-2 border-white w-fit p-1 mx-auto hover:bg-white hover:text-black transition-colors" data-svelte-h="svelte-16nqs53">Try again</button></div>`}`}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { socialLinks } = $$props;
  if ($$props.socialLinks === void 0 && $$bindings.socialLinks && socialLinks !== void 0)
    $$bindings.socialLinks(socialLinks);
  return `<footer class="w-full text-center"><ul class="flex flex-row justify-center align-middle p-2">${each(socialLinks, (socialLink) => {
    return `<li class="inline-block min-w-fit p-2 hover:opacity-80"><a class="inline-block"${add_attribute("href", socialLink.link, 0)} target="_blank" rel="noopener noreferrer"><img decoding="async" loading="lazy" class="inline-block"${add_attribute("src", socialLink.icon, 0)}${add_attribute("alt", socialLink.name, 0)} width="50" height="50"></a> </li>`;
  })}</ul> <p data-svelte-h="svelte-803dj2">Marley Mulvin Broome © 2023</p> <button class="text-emerald-500 underline" data-svelte-h="svelte-nedj21">Back to top</button></footer>`;
});
let scrollHeight = 1;
let innerHeight = 1;
const ScrollProgressTracker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y = 0;
  let scrollPercent = 0;
  {
    {
      scrollPercent = y / (scrollHeight - innerHeight) * 100;
    }
  }
  return ` <div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 z-50" style="${"width: " + escape(scrollPercent, true) + "%;"}"></div>`;
});
const BottomModal_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const projectItems = [
    {
      name: "JSpeak",
      description: "An anki addon that generates TTS audio on the fly.",
      video: "JSpeak.webm",
      image: "JSpeak.png",
      tags: ["Python", "Anki", "TTS", "Tool", "Open Source"]
    },
    {
      name: "Plantopia",
      description: "A game where you manage a farm.",
      video: "plantopia.webm",
      image: "Plantopia.png",
      tags: ["Unity", "C#", "Game Development"]
    },
    {
      name: "Electron Timer",
      description: "A capable timer app built with Electron.",
      video: "electrontimer.webm",
      image: "electrontimer.png",
      tags: ["Electron", "JavaScript", "Tool", "Open Source"]
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-tui57o_START -->${$$result.title = `<title>Marley Mulvin Broome</title>`, ""}<!-- HEAD_svelte-tui57o_END -->`, ""}  ${validate_component(ScrollProgressTracker, "ScrollProgressTracker").$$render($$result, {}, {}, {})} <div class="flex flex-col items-center justify-center h-screen"><div>${validate_component(Title, "Title").$$render($$result, {}, {}, {
    description: () => {
      return `<span slot="description">Creating software that is ${validate_component(Emphasis, "Emphasis").$$render($$result, {}, {}, {
        default: () => {
          return `accessible`;
        }
      })}, ${validate_component(Emphasis, "Emphasis").$$render($$result, {}, {}, {
        default: () => {
          return `usable`;
        }
      })}, and ${validate_component(Emphasis, "Emphasis").$$render($$result, {}, {}, {
        default: () => {
          return `beautiful`;
        }
      })}.</span>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-13hpi5g">Marley Mulvin Broome</span>`;
    }
  })}</div></div> ${validate_component(Section, "Section").$$render($$result, {}, {}, {
    content: () => {
      return `<div slot="content" class="mt-10 text-center">${validate_component(List, "List").$$render($$result, { items: projectItems }, {}, {})} <div class="my-5">${validate_component(LinkButton, "LinkButton").$$render($$result, { externalLink: false, href: "/projects" }, {}, {
        default: () => {
          return `See more...`;
        }
      })}</div></div>`;
    },
    subtitle: () => {
      return `<span slot="subtitle" data-svelte-h="svelte-1uefytb">Click on a project to see more</span>`;
    },
    title: () => {
      return `<span id="projects" slot="title" data-svelte-h="svelte-1stym1d">Projects</span>`;
    }
  })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
    content: () => {
      return `<div slot="content" class="mt-10">${validate_component(PostsView, "PostsView").$$render($$result, { size: "sm", posts: data.posts }, {}, {})}</div>`;
    },
    subtitle: () => {
      return `<span slot="subtitle" data-svelte-h="svelte-oi4jo6">Click on a post to read</span>`;
    },
    title: () => {
      return `<a href="/blog" id="blog" slot="title" class="hover:underline" data-svelte-h="svelte-ha66bv">Blog</a>`;
    }
  })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
    content: () => {
      return `<div class="p-4" slot="content">${validate_component(GithubStats, "GithubStats").$$render($$result, {}, {}, {})}</div>`;
    },
    title: () => {
      return `<span class="flex flex-row gap-2" slot="title" data-svelte-h="svelte-hfwwxa">Stats <img class="lg:w-10 lg:h-10 w-8 h-8 my-auto lg:mt-5" src="github-mark-white.svg" alt="Github"></span>`;
    }
  })} ${validate_component(Section, "Section").$$render($$result, { classes: "mb-80" }, {}, {
    content: () => {
      return `<div slot="content">${validate_component(SkillList, "SkillList").$$render($$result, { skills: data.skills }, {}, {})}</div>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-1tpb237">Skills</span>`;
    }
  })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
    content: () => {
      return `<div slot="content">${validate_component(Timeline, "Timeline").$$render($$result, { events: data.timelineEvents }, {}, {})}</div>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-1htmh4p">Experience</span>`;
    }
  })} ${validate_component(Section, "Section").$$render($$result, {}, {}, {
    content: () => {
      return `<div class="pt-4" slot="content">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div>`;
    },
    title: () => {
      return `<span slot="title" data-svelte-h="svelte-phsuth">Contact</span>`;
    }
  })} ${validate_component(Footer, "Footer").$$render($$result, { socialLinks: data.socialLinks }, {}, {})} `;
});
export {
  Page as default
};
