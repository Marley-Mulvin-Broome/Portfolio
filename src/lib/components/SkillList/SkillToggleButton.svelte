<script lang="ts">
	import { createEventDispatcher } from "svelte";

    export let toggled: boolean = false;

    const dispatch = createEventDispatcher();

    let currentClasses = "";

    $: if (toggled) {
        currentClasses = "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white";
    } else {
        currentClasses = "hover:bg-emerald-500 hover:bg-opacity-50";
    }
</script>

<button class=" transition border-emerald-500 border-2 rounded p-1 {currentClasses}" on:click={() => {toggled = !toggled; dispatch('click');}}><slot/></button>
