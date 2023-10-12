<script lang="ts">
	import NavbarLink from "./NavbarLink.svelte";

    export let links: { href: string, text: string }[] = [];

    export let sticky = true;
</script>

<nav class="{sticky ? "sticky top-0" : ""} mx-auto shadow-lg w-fit flex flex-row justify-center rounded-b-md z-10">
    {#each links as link}
        <NavbarLink href={link.href}>
            {link.text}
        </NavbarLink>
    {/each}
</nav>

<style>
    nav {
        background: #171717;
    }
</style>