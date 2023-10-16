<script lang="ts">
	import type { Post } from "$lib/types/post";
	import PostCard from "./PostCard.svelte";

    export let posts: Post[] = [];

    export let size: "sm" | "md" = "md";
</script>

<div class="flex flex-row flex-wrap justify-center gap-10 w-full lg:gap-5">
    {#each posts as post}
            <PostCard {size} {post}/>
    {/each}
</div>
