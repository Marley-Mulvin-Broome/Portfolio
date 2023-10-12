<script lang="ts">
	import Navbar from "$lib/components/navbar/Navbar.svelte";

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

<slot />