<script lang="ts">
	import SectionTitle from "$lib/components/SectionTitle.svelte";

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

<article class="flex flex-col text-left mx-auto w-11/12 lg:w-1/2 pt-10">
    <hgroup>
        <h1 class="lg:text-4xl text-3xl font-bold text-emerald-500">
            {data.meta.title}
        </h1>

        <p class="text-sm text-neutral-300 py-6">
            Marley Mulvin Broome, {data.meta.date}
        </p>
    </hgroup>

    <svelte:component this={data.content} />
</article>

<style>
    code {
        counter-reset: step;
        counter-increment: step 0;
    }

    code .line::before {
        content: counter(step);
        counter-increment: step;
        width: 1rem;
        margin-right: 1.5rem;
        display: inline-block;
        text-align: right;
        color: rgba(115,138,148,.4);
    }
</style>