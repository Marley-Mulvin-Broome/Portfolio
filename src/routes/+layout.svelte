<script>
	import { fade, fly } from "svelte/transition";
    import "../app.css";

    export let data;
</script>

<svelte:head>
    <title>Marley Mulvin Broome</title>
    <meta name="description" content="Marley Mulvin Broome's personal portfolio.">
    <meta name="keywords" content="marley, mulvin, broome, web, web developer, programmer, hire web, hire developer, website creation, app, dev, hire dev, junior">
    <meta name="author" content="Marley Mulvin Broome, marley.developer@gmail.com">
    <meta name="language" content="en">
    <meta name="robots" content="index,follow">
    <meta name="revised" content="Sunday, August 13th, 2023, 17:20 pm">
    
    <meta name="og:title" content="Marley Mulvin Broome">
    <meta name="og:description" content="Marley Mulvin Broome's personal portfolio.">
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