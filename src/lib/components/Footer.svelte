<script lang="ts">
	import type { ISocialLink } from "$lib/types/socialLink";

    export let socialLinks: ISocialLink[];

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
</script>

<footer class="w-full text-center">
    <ul class="flex flex-row justify-center align-middle p-2">
        {#each socialLinks as socialLink}
            <li class="inline-block min-w-fit p-2">
                <a class="inline-block" href={socialLink.link} target="_blank" rel="noopener noreferrer">
                    <img decoding="async" loading="lazy" class="inline-block" src={socialLink.icon} alt={socialLink.name} width="50" height="50">
                </a>
            </li>
        {/each}
    </ul>
    <p>Marley Mulvin Broome &copy; 2023</p>
    <button class="text-emerald-500 underline" on:click={backToTop}>Back to top</button>
</footer>