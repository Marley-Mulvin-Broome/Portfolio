<script lang="ts">
    import type { Skill } from "$lib/types/skill";
	import Tag from "../Tag.svelte";

    export let skill: Skill;
</script>

<img loading="lazy" decoding="async" class="mb-1 mx-auto" src="skills/{skill.icon}" alt="{skill.name}" width="100" height="100"/>
<h3 class="text-center text-xl align-middle">{skill.name}</h3>

<p>{skill.description}</p>
<div class="flex flex-row flex-wrap mt-2 lg:justify-normal justify-center">
    {#each skill.categories as category}
        <Tag>{category}</Tag>
    {/each}
    <Tag>{skill.experience} year(s) of experience</Tag>
</div>