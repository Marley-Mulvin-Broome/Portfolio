<script lang="ts">
	import { browser } from "$app/environment";

    let y = 0;
    let scrollHeight = 1;
    let innerHeight = 1;
    let scrollPercent = 0;

    $: if (!browser) {
        scrollPercent = y / (scrollHeight - innerHeight) * 100;
    } else {
        scrollPercent = y / (document.body.scrollHeight - window.innerHeight) * 100;
    }

</script>

<svelte:window bind:scrollY={y} />

<div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 z-50" style=" width: {scrollPercent}%;"></div>
