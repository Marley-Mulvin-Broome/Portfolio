<script lang="ts">
	import { SkillCategory, type Skill } from "$lib/types/skill";
	import Tag from "../Tag.svelte";
	import SkillListItem from "./SkillListItem.svelte";
	import SkillToggleButton from "./SkillToggleButton.svelte";

    export let skills: Skill[] = [];
    export let Categories: SkillCategory[] = [];
    export let possibleCategories: SkillCategory[] = Object.values(SkillCategory);

    $: categoryString = Categories.length > 0 ? Categories.join(", ") : "All";

    let selectedSkill: Skill | null = skills.length > 0 ? skills[0] : null;

    const toggleCategory = (category: SkillCategory) => {
        if (Categories.includes(category)) {
            Categories = Categories.filter((c) => c !== category);
        } else {
            Categories = [...Categories, category];
        }
    }

    const sortSkills = (a: Skill, b: Skill) => {
        if (a.experience === b.experience) {
            return a.name.localeCompare(b.name);
        }

        return b.experience - a.experience;
    }

    const getSkillsWithCategories = (categories: SkillCategory[]) => {
        if (categories.length === 0) return skills.sort(sortSkills);

        return skills.filter(
            (skill) => {
                for (const category of categories) {
                    if (!skill.categories.includes(category)) {
                        return false;
                    }
                }

                return true;
            }
        ).sort(sortSkills);
        
    }
</script>


<div class="grid grid-cols-3 mt-20 gap-4">
    <div class="col-span-1">
        <h3 class="text-2xl text-center text-emerald-400">Categories</h3>
        <p class="text-center text-neutral-300">Click a category to filter</p>
        <div class="mt-2 flex flex-wrap gap-2">
            {#each possibleCategories as category}
                <SkillToggleButton on:click={() => toggleCategory(category)}>{category}</SkillToggleButton>
            {/each}
        </div>
        <div class="mt-2">
            {#if selectedSkill}
                <img loading="lazy" decoding="async" class="mb-1 mx-auto" src="skills/{selectedSkill.icon}" alt="{selectedSkill.name}" width="100" height="100"/>
                <h3 class="text-center text-xl align-middle">{selectedSkill.name}</h3>
                
                <p>{selectedSkill.description}</p>
                <div class="flex flex-row flex-wrap mt-2">
                    {#each selectedSkill.categories as category}
                        <Tag>{category}</Tag>
                    {/each}
                    <Tag>{selectedSkill.experience} year(s) of experience</Tag>
                </div>
            {/if}
        </div>
    </div>

    <div class="col-span-2">
        <h3 class="text-2xl text-center text-emerald-400">{categoryString}</h3>
        <div class="grid grid-cols-4 mt-7" >
            {#each getSkillsWithCategories(Categories) as skill}
                <SkillListItem on:click={() => { selectedSkill = skill; }} skill={skill} />
            {/each}
        </div>
        
    </div>
</div>

