<script lang="ts">
	import SectionTitle from "./SectionTitle.svelte";

    export let classes = "";
</script>

<div class="flex flex-col items-center min-h-screen mt-56 {classes}">
    <SectionTitle>
        <slot name="title"/>
    </SectionTitle> 

    <div class="text-neutral-300 mt-2 text-center">
        <slot name="subtitle"/>
    </div>

    <div class="container mx-auto">
        <slot name="content"/>
    </div>
</div>