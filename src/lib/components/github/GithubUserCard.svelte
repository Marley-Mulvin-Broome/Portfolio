<script lang="ts">
	import { createEventDispatcher } from "svelte";

    export let login: string = '';
    export let name: string
    export let avatarUrl: string = '';
    export let bio: string = '';

    const dispatch = createEventDispatcher();

    const onClick = () => { dispatch('onClick'); }
</script>

<div role="button" tabindex="-1" on:keydown={() => {}} on:click={onClick} class="select-none flex flex-row gap-2 p-2 my-2 h-24 bg-gradient-to-br cursor-pointer hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 rounded-xl">
    <img decoding="async" class="w-20 h-20 rounded-full" placeholder="identicon.png" src={avatarUrl} width="80" height="80" alt="{login}'s Github Profile"/>
    <div class="flex flex-col">
        <p class="text-base">{name ?? ""}</p>
        <p class="text-sm text-gray-300">{login}</p>
        <p class="overflow-ellipsis line-clamp-1">{bio ?? ""}</p>
    </div>
    
</div>