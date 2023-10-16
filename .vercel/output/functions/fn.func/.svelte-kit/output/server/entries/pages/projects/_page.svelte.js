import { c as create_ssr_component, h as createEventDispatcher, e as escape, d as add_attribute, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const ProjectsTh = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { sortingKey = "" } = $$props;
  let { key = "" } = $$props;
  let { direction = "ascending" } = $$props;
  let { sortable = true } = $$props;
  const getDirection = (dir) => {
    if (dir === "ascending") {
      return "↓";
    } else {
      return "↑";
    }
  };
  if ($$props.sortingKey === void 0 && $$bindings.sortingKey && sortingKey !== void 0)
    $$bindings.sortingKey(sortingKey);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  return `<th scope="col" class="${["font-medium px-6 py-3 select-none", sortable ? "cursor-pointer" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}${sortingKey === key ? ` ${escape(getDirection(direction))} ` : ``}</th>`;
});
const padding = "px-2 py-2 md:px-6 md:py-4";
const ProjectsTr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `<tr class="text-xl text-left hover:bg-emerald-600"><th scope="row"${add_attribute("class", padding, 0)}>${project.link ? `<a class="underline text-emerald-500" target="_blank" rel="noopener noreferrer"${add_attribute("href", project.link, 0)}>${escape(project.name)}</a>` : `<p class="inline-block">${escape(project.name)}</p>`} ${project.source ? `<a class="inline-block" target="_blank" rel="noopener noreferrer"${add_attribute("href", project.source, 0)}><img class="inline-block" src="skills/github.svg" width="25" height="25" alt="Source code on Github"></a>` : ``}</th> <td${add_attribute("class", padding, 0)}>${escape(project.date.toISOString().split("T")[0])}</td> <td${add_attribute("class", padding, 0)}>${escape(project.description)}</td></tr>`;
});
const ProjectsTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects = [] } = $$props;
  let sortingKey = "date";
  function sortProjects(a, b) {
    switch (sortingKey) {
      case "date": {
        return a.date.getTime() - b.date.getTime();
      }
      case "name": {
        return a.name.localeCompare(b.name);
      }
      default:
        return 0;
    }
  }
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  return `<table class="mx-auto w-full text-left"><thead class=""><tr class="text-2xl bg-emerald-600">${validate_component(ProjectsTh, "ProjectsTh").$$render($$result, { sortingKey, key: "name" }, {}, {
    default: () => {
      return `Name`;
    }
  })} ${validate_component(ProjectsTh, "ProjectsTh").$$render($$result, { sortingKey, key: "date" }, {}, {
    default: () => {
      return `Date`;
    }
  })} ${validate_component(ProjectsTh, "ProjectsTh").$$render(
    $$result,
    {
      sortingKey,
      sortable: false,
      key: "description"
    },
    {},
    {
      default: () => {
        return `Description`;
      }
    }
  )}</tr></thead> <tbody>${each(projects.sort(sortProjects), (project) => {
    return `${validate_component(ProjectsTr, "ProjectsTr").$$render($$result, { project }, {}, {})}`;
  })}</tbody></table>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1r8d5ot_START -->${$$result.title = `<title>My Projects</title>`, ""}<!-- HEAD_svelte-1r8d5ot_END -->`, ""}  <div class="text-center mt-5">${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
    default: () => {
      return `Projects`;
    }
  })} <div class="md:w-4/6 w-5/6 mx-auto mt-16 relative overflow-x-auto shadow-md rounded-lg">${validate_component(ProjectsTable, "ProjectsTable").$$render($$result, { projects: data.projects }, {}, {})}</div></div>`;
});
export {
  Page as default
};
