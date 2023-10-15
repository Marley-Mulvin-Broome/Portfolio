<script lang="ts">
	import Tag from "$lib/components/Tag.svelte";
import { title } from "$lib/config";

    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content={data.meta.title}/>
    <meta property="og:description" content={data.meta.description}/>
    <meta property="og:url" content={`https://marley-web.dev/blog/${data.meta.slug}`}/>
    <meta property="og:image" content={`https://marley-web.dev/${data.meta.image}`}/>
</svelte:head>

<article class="flex flex-col text-left mx-auto w-11/12 lg:w-1/2 mt-10 py-6 mb-10 px-4 rounded">
    <hgroup>
        <h1 class="lg:text-4xl text-3xl font-bold text-emerald-500">
            {data.meta.title}
        </h1>

        <ul class="pt-4 flex flex-row">
            {#each data.meta.tags as tag}
                <li>
                    <Tag>
                        {tag}
                    </Tag>
                </li>
            {/each}
        </ul>

        <p class="text-sm text-neutral-300">
            Marley Mulvin Broome, {data.meta.date}
        </p>

        <img src="/{data.meta.img}" alt="{data.meta.title}" class="pt-5 max-w-full">

        
    </hgroup>

    <div class="prose">
        <svelte:component this={data.content} />
    </div>
</article>

<style>
    /* Code lines */
    :global(code) {
        counter-reset: step;
        counter-increment: step 0;
    }

    :global(code .line::before) {
        content: counter(step);
        counter-increment: step;
        width: 1rem;
        margin-right: 1.5rem;
        display: inline-block;
        text-align: right;
        color: rgba(137, 164, 175, 0.4);
    }

    article {
        background-color: #272727;
    }
</style>