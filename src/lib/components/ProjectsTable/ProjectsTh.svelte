<script lang="ts">
	import type { SortingDirection } from "$lib/types/sortingDirection";
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let sortingKey = "";
    export let key = "";
    export let direction: SortingDirection = "ascending";
    export let sortable: boolean = true;

    const getDirection = (dir: string) => {
        if (dir === "ascending") {
            return "↓";
        } else {
            return "↑";
        }
    }

    const onClick = () => {
        if (!sortable) {
            return;
        }

        if (sortingKey === key) {
            if (direction === "ascending") {
                direction = "descending";
            } else {
                direction = "ascending";
            }
        }

        dispatch('click', {
            key: key,
            direction: direction
        });
    }
</script>

<th scope="col" class="font-medium px-6 py-3 select-none" class:cursor-pointer={sortable} on:click={onClick}><slot/>{#if sortingKey === key} {getDirection(direction)} {/if}</th>