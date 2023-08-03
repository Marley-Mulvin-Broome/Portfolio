<script lang="ts">
	import { createEventDispatcher } from "svelte";
    import GithubSearchbar from "./GithubSearchbar.svelte";
	import GithubUserCard from "./GithubUserCard.svelte";
	import Spinner from "./Spinner.svelte";

    export let limit: number = 3;

    const dispatch = createEventDispatcher();

    let searchTerm = '';

    const search = async (query: string) => {
        if (query == '') {
            return {
                nodes: []
            }
        }

        const response = await fetch(`/api/github/search?searchString=${query}`, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }

    const onClick = (event: any) => { dispatch('userSelected', event.detail); }
</script>

<div class="rounded mt-2 w-10/12 md:w-2/3 mx-auto lg:w-1/3 p-2 ">
    <!-- <div class="flex flex-row justify-between w-full">
        <h3 class="text-lg">Search</h3>
        <input class="w-10/12 bg-transparent border-y-2 focus:outline-none" type="text" name="githubSearch" id="githubSearch">
    </div> -->

    <GithubSearchbar bind:value={searchTerm} />

    <div class="container md:h-20 pt-2">
        {#await search(searchTerm)}
            <div class="flex justify-center">
                <Spinner/>
            </div>
        {:then results} 
            {#each results.nodes as userNode}
                {#if Object.keys(userNode).length > 0}
                    <GithubUserCard on:click={onClick} login={userNode.login} name={userNode.name} avatarUrl={userNode.avatarUrl} bio={userNode.bio} />
                {/if}
            {/each}
        {:catch error}
            <p>{error}</p>
        {/await}
        <!-- <GithubUserCard login="torvalds" name="Linus Torvalds" avatarUrl="https://avatars.githubusercontent.com/u/1024025?v=4" bio="I am a god among men. That is all you must know and for the sdfojasef asf df sdf sef sf"/>
        <GithubUserCard login="torvalds" name="Linus Torvalds" avatarUrl="https://avatars.githubusercontent.com/u/1024025?v=4" bio="I am a god among men. That is all you must know"/>
        <GithubUserCard login="torvalds" name="Linus Torvalds" avatarUrl="https://avatars.githubusercontent.com/u/1024025?v=4" bio="I am a god among men. That is all you must know"/> -->
    </div>
</div>