<script lang="ts">
	import type { Post } from "$lib/types/post";
	import PostCard from "./PostCard.svelte";

    export let posts: Post[] = [];
</script>

<div class="flex flex-row flex-wrap justify-center gap-10 lg:gap-5">
    {#each posts as post}
            <PostCard {post}/>
    {/each}
</div>
