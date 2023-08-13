<script lang="ts">
    export let href: string = "";
    export let externalLink: boolean = false;
</script>

{#if externalLink}
    <a data-sveltekit-noscroll href={href} target="_blank" rel="noopener noreferrer"  class="text-xl text-emerald-400 hover:text-emerald-300 transition-all underline underline-offset-4 decoration-2 hover:text-">
        <slot/>
    </a>
{:else}
    <a data-sveltekit-noscroll href={href}  class="text-xl text-emerald-400 hover:text-emerald-300 transition-all underline underline-offset-4 decoration-2 hover:text-">
        <slot/>
    </a>
{/if}
