<script lang="ts">
	import { SkillCategory, type Skill } from "$lib/types/skill";
	import SkillDisplay from "./SkillDisplay.svelte";
	import SkillListItem from "./SkillListItem.svelte";
	import SkillToggleButton from "./SkillToggleButton.svelte";

    export let skills: Skill[] = [];
    export let Categories: SkillCategory[] = [];
    export let possibleCategories: SkillCategory[] = Object.values(SkillCategory);

    $: categoryString = Categories.length > 0 ? Categories.join(", ") : "All Skills";

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


<div class="grid xl:grid-cols-3 grid-row-1 xl:mt-20 mt-2 gap-4">
    <div class="xl:col-span-1 xl:order-1 order-2">
        <div class="lg:block hidden" >
            <h3 class="text-2xl text-center text-emerald-400">Categories</h3>
            <p class="text-center text-neutral-300">Click a category to filter</p>
            <div class="mt-2 flex flex-wrap gap-2">
                {#each possibleCategories as category}
                    <SkillToggleButton on:click={() => toggleCategory(category)}>{category}</SkillToggleButton>
                {/each}
            </div>
        </div>
        
        <div class="mt-2 md:mx-0 lg:text-left text-center">
            {#if selectedSkill}
                <SkillDisplay skill={selectedSkill} />
            {/if}
        </div>
    </div>

    <div class="col-span-2">
        <h3 class="text-2xl text-center text-emerald-400 xl:block hidden">{categoryString}</h3>
        <p class="text-center text-neutral-300">Click a skill to view more details</p>
        <div class="grid grid-cols-4 mt-7" >
            {#each getSkillsWithCategories(Categories) as skill}
                <SkillListItem on:click={() => { selectedSkill = skill; }} skill={skill} />
            {/each}
        </div>
        
    </div>
</div>

