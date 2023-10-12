<script lang="ts">
	import type { Post } from "$lib/types/post";
	import Tag from "../Tag.svelte";

    export let post: Post;

</script>

<div class="group flex flex-col items-center border rounded border-neutral-700 transition-opacity hover:opacity-80">
    <a href={`blog/${post.slug}`}>
        <img src={post.img} alt={`${post.title}`} class="rounded-t border-b border-neutral-700" />
        <hgroup>
            <h2 class="text-4xl pt-2 font-bold text-emerald-500  group-hover:text-emerald-400 text-center transition-colors">
                {post.title}
            </h2>
    
            <p class="text-neutral-300 pt-1 text-sm text-center">
                {post.date}
            </p>
        </hgroup>
        


        <p class="text-white text-lg mt-2 text-left px-4 pb-2">
            {post.description}
        </p>

        <div class="flex flex-row mx-4 mb-1">
            {#each post.tags as tag}
                <Tag>
                    {tag}
                </Tag>
            {/each}
        </div>
        
    </a>
</div>