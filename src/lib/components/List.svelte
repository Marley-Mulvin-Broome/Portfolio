<script lang="ts">
	import ListItem from "./ListItem.svelte";
    import type { IListItem } from "../types/listItem"

    export let items: IListItem[] = [];
</script>

<ul class="list-none grid md:grid-cols-3 md:gap-4  grid-cols-1">
    {#each items as item}
        <ListItem item={item} />
    {/each}
</ul>