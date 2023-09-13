<script lang="ts">
	import Card from "$lib/components/Card.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<div class="text-center mt-5">
    <SectionTitle>
        Blog
    </SectionTitle>
    <div class="flex flex-row flex-wrap justify-center">
        {#each data.blogs as blog}
            <Card href="{blog.slug}" img={blog.image} title={blog.title}>
                <p>
                    {blog.description}
                </p>
            </Card>
        {/each}
    </div>
    
</div>