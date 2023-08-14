<script lang="ts">
	import { onMount } from "svelte";

    let y = 0;
    let scrollHeight = 0;
    let innerHeight = 0;

    onMount (() => {
        scrollHeight = document.body.scrollHeight;
        innerHeight = window.innerHeight;
    });

    $: scrollPercent = y / (scrollHeight - innerHeight) * 100;

</script>

<svelte:window bind:scrollY={y} />


<div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 z-50" style=" width: {scrollPercent}%;"></div>
