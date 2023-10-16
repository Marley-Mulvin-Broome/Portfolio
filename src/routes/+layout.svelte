<script>
	import { fade } from "svelte/transition";
    import "../app.css";
	import Navbar from "$lib/components/navbar/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";

    export let data;

    const links = [
        {
            href: "/",
            text: "Home"
        },
        {
            href: "/blog",
            text: "Blog"
        },
        {
            href: "/projects",
            text: "Projects"
        }
    ]
</script>

<Navbar {links}/>


{#key data.url}
    <div in:fade={{duration: 150, delay: 150}} out:fade={{duration: 150}}>
        <slot />
    </div>
{/key}

<Footer socialLinks={data.socialLinks} />

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.bg);
      color: theme(colors.white);
    }
</style>