<script>
    import "../app.css";
</script>

<svelte:head>
    <title>Marley Mulvin Broome</title>
    <meta name="description" content="Marley Mulvin Broome's personal portfolio.">
</svelte:head>

<slot />

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.bg);
      color: theme(colors.white);
    }
</style>