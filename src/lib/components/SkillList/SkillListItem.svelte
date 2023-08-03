<script lang="ts">
	import type { Skill } from "$lib/types/skill";
	import { createEventDispatcher } from "svelte";
	import { fade } from "svelte/transition";

    const dispatch = createEventDispatcher();

    export let skill: Skill;

    const onClick = () => {
        dispatch('click', {
            skill
        });
    }
</script>

<div transition:fade>
    <div on:keydown={() => {}} on:click={onClick} role="button" tabindex="-1" class="group cursor-pointer hover:bg-opacity-10 hover:bg-emerald-300 grid grid-cols-1 p-1">
        <img class="mb-1 mx-auto  group-hover:opacity-90 {skill.imgStyling ?? ""}" src="skills/{skill.icon}" alt="{skill.name}" width="50" height="50"/>
        <p class="text-center">{skill.name}</p>
    </div>
</div>