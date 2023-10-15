<script lang="ts">
	import NavbarLink from "./NavbarLink.svelte";

    export let links: { href: string, text: string }[] = [];

    export let sticky = true;

    export let stickyThreshold = 0;

    let scrollY = 0;

    let topMinus = 0;
    let opacity = 100;

    $: {
        if (scrollY > stickyThreshold && sticky) {
            topMinus = -4;
            opacity = 80;
        } else {
            topMinus = 0;
            opacity = 100;
        }
    }

    // TODO: Make the sticky version lose opacity / get smaller when not at the top of the page, unless hovered
</script>

<svelte:window bind:scrollY />

<nav style={`--nav-top: ${topMinus}%;`} class="{sticky ? `sticky opacity-${opacity}` : ""}  mx-auto shadow-lg w-fit flex flex-row justify-center rounded-b-md z-10 transition-all">
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

    @media screen and (min-width: 1280px) {
        nav.sticky {
            top: var(--nav-top);
        }


        nav.sticky:hover {
            top: 0;
            opacity: 1;
        }
    }
    
</style>