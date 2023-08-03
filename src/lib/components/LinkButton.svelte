<script lang="ts">
    export let href: string = "";
    export let externalLink: boolean = false;
</script>

<!-- <a href={href} target="_blank" rel="noopener noreferrer" class="w-fit gap-1 mx-auto hover:opacity-80 transition-opacity text-left flex flex-row mt-4 bg-gradient-to-br from-emerald-500 to-emerald-600 p-2 rounded-md">
    <span class="text-neutral-100 text-lg hover:text-neutral-5 transition ease-in-out duration-300">
        <slot />
    </span>
</a> -->

{#if externalLink}
    <a data-sveltekit-noscroll href={href} target="_blank" rel="noopener noreferrer"  class="text-xl text-emerald-400 hover:text-emerald-300 transition-all underline underline-offset-4 decoration-2 hover:text-">
        <slot/>
    </a>
{:else}
    <a data-sveltekit-noscroll href={href}  class="text-xl text-emerald-400 hover:text-emerald-300 transition-all underline underline-offset-4 decoration-2 hover:text-">
        <slot/>
    </a>
{/if}
