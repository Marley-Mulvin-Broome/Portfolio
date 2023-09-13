<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let value = '';

    const dispact = createEventDispatcher();

    const submit = () => dispact('submit');
</script>

<form on:submit|preventDefault={submit}>
    <div class="flex">
        <label for="github-search" class="mb-2 text-sm font-medium sr-only text-white">Your Email</label>
        
        <div class="relative w-full">
            <input bind:value={value} type="search" id="github-search" class="block p-2.5 w-full z-20 text-sm rounded-r-lg bg-transparent outline-none focus:outline-none border-t-0 border-l-0 border-r-0 focus:outline-0 border-b-2 transition-all border-neutral-400 focus:border-neutral-200"  placeholder="Search Github Username" required>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-emerald-600 rounded-r-lg border border-emerald-700 hover:bg-emerald-800 focus:ring-2  focus:outline-none focus:ring-blue-300 ">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
