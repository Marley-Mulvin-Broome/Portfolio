<script lang="ts">
    export let id: string = "";
</script>

<h1 {id} class="lg:text-7xl text-3xl font-bold text-emerald-500">
    <slot />
</h1>