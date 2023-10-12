<script lang="ts">
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

<article>
    <hgroup>
        
    </hgroup>
</article>