<script lang="ts">
    import Tag from "./Tag.svelte";
    import type { IListItem } from "../types/listItem"

    export let item: IListItem = {
        name: "Name",
        description: "Description",
        image: "",
        tags: []
    };
</script>

<li class="text-left rounded-md p-3 hover:translate-x-2 cursor-pointer transition-transform shadow bg-none lg:hover:bg-gradient-to-b lg:hover:from-emerald-600">
    <p class="sm:text-m text-3xl underline decoration-4 underline-offset-8 decoration-white-700">{item.name}</p>
    {#if item.image}
        <img class="mt-4 rounded opacity-95" src={item.image} alt="Image of {item.name}" />
    {/if}
    {#if item.video}
        <video class="mt-4 rounded opacity-95" autoplay loop>
            <track kind="captions"/>
            <source src={item.video} type="video/mp4" />
        </video>
    {/if}
    <p class="mt-2">{item.description}</p>
    
    {#if item.tags}
        <div class="mt-2 flex flex-row flex-wrap">
            {#each item.tags as tag}
                <Tag>{tag}</Tag>
            {/each}
        </div>
    {/if}
</li>