<script lang="ts">
    export let href = "#";
</script>

<a {href} class="rounded-b-md py-6 px-10 text-emerald-500 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 hover:text-neutral-200 text-xl">
    <slot />
</a>