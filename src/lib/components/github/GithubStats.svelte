<script lang="ts">
	import Spinner from "../Spinner.svelte";
	import GithubSearch from "./GithubSearch.svelte";
	
    export let canSearch: boolean = true;
    
    let currentUsername = "Marley-Mulvin-Broome";

    async function getUserData(username: string | null) {
        username = username ?? "torvalds"

        const response = await fetch(`/api/github?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }

    const onUserSelected = (event: any) => {
        currentUsername = event.detail.login;
        githubPromise = getUserData(currentUsername);
    }

    let githubPromise = getUserData(currentUsername)
</script>

<div class="w-10/12 md:w-2/3 lg:w-1/3 h-fit mx-auto bg-gradient-to-br rounded-lg p-4 from-emerald-500 to-emerald-700">
    {#await githubPromise}
        <div class="flex justify-center h-48 items-center">
            <Spinner />
        </div>
    {:then user} 
        <div class="flex gap-4">
            <div class="min-w-fit justify-self-center">
                <img class="rounded-full self-center" alt="{user.name} github profile" width="130" height="130" src={user.avatarUrl}/>
            </div>
            <div class="">
                <h3 class="text-xl md:text-2xl text-gray-200 font-bold">{user.name ?? "No name"}</h3> <!-- Username -->
                <p class="md:text-base text-gray-300">{currentUsername}</p> <!-- Nickname -->
                <p class="text-ellipsis">{user.bio ?? ""}</p>
            </div>
        </div>

        <aside class="grid text-center grid-cols-3 grid-rows-1 mt-4">
            <p class="">{user.followers.totalCount} Followers</p>
            <p>{user.following.totalCount} Following</p>
            <a class="underline hover:opacity-80 transition-opacity" href="https://github.com/{currentUsername}?tab=repositories" target="_blank" rel="noopener noreferrer">{user.repositories.totalCount} Repositories</a>
        </aside>

        <p class="text-center text-lg font-semibold mt-4">Total Contributions: {user.contributionsCollection.contributionCalendar.totalContributions}</p>
        <div class="grid grid-cols-3 grid-rows-1 mt-2">
            <button class="text-center underline" aria-label="Reload" on:click|preventDefault={() => {githubPromise = getUserData(currentUsername)}}>Reload</button>

            <a href="https://github.com/{currentUsername}" class="col-start-3 text-center underline" target="_blank" rel="noopener noreferrer">Follow</a>
        </div>
        
    
    {:catch error}
        <p>error: {error.message}</p>
    {/await}
    
</div>

{#if canSearch}
    <GithubSearch on:userSelected={onUserSelected}/>
{/if}