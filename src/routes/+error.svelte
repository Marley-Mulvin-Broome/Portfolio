<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="p-40 align-middle text-center flex justify-center flex-col">
    <h1 class="text-emerald-500 text-4xl p-10">Error {$page.status}: {$page.error?.message}</h1>
    <a class="text-xl  hover:opacity-80" href="/">Go home...</a>
</div>
