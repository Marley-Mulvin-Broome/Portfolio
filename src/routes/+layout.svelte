<script>
	import { fade, fly } from "svelte/transition";
    import "../app.css";

    export let data;
</script>

<svelte:head>
    <title>Marley Mulvin Broome</title>
    <meta name="description" content="Marley Mulvin Broome is a web developer and current student at the University of New South Wales. Fluent in both Japanese and English.">
    <meta name="keywords" content="marley, mulvin, broome, web, web developer, programmer, hire web, hire developer, website creation, app, dev, github, github stats, hire dev, junior">
    <meta name="author" content="Marley Mulvin Broome, marley.developer@gmail.com">
    <meta name="language" content="en">
    <meta name="robots" content="index,follow">
    <meta name="revised" content="Sunday, August 13th, 2023, 17:20 pm">
    <meta charset="utf-8">
    
    <meta name="og:title" content="Web Developer Marley Mulvin Broome's Profile">
    <meta name="og:description" content="Marley Mulvin Broome is a web developer and current student at the University of New South Wales. Fluent in both Japanese and English.">
    <meta name="og:image" content="https://avatars.githubusercontent.com/u/20318132?v=4">
    <meta name="og:email" content="marley.developer@gmail.com">
</svelte:head>

{#key data.url}
    <div in:fade={{duration: 150, delay: 150}} out:fade={{duration: 150}}>
        <slot />
    </div>
{/key}


<style lang="postcss">
    :global(html) {
      background-color: theme(colors.bg);
      color: theme(colors.white);
    }
</style>