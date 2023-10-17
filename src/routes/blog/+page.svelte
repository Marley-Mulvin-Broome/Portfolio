<script lang="ts">
	import SectionTitle from "$lib/components/SectionTitle.svelte";
	import PostsView from "$lib/components/blog/PostsView.svelte";

    export let data;
</script>

<svelte:head>
    <title>Marley's Blog</title>
    <meta name="description" content="Guides and tutorials on how to do epic stuff we tech, mixed in with my own personal spice."/>
    <meta name="keywords" content="blog, tech, tutorials, guides, personal, marley, mulvin, broome"/>
    <meta name="author" content="Marley Mulvin Broome"/>
    <meta name="robots" content="index, follow"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@marley_eng"/>
    <meta name="twitter:creator" content="@marley_eng"/>
</svelte:head>

<div class="w-full flex justify-center justify-self-center pb-10">
    <!-- Blogs container -->
    <div class="pt-2 lg:pt-24 text-center w-full">
        <SectionTitle>
            Blog
            
        </SectionTitle>

        <div class="text-neutral-300 mt-2 text-center">
            A collection of my thoughts and experiences.
        </div>

        <div class="flex justify-center ">
            <div class="pt-10 lg:pt-16 w-11/12 lg:w-5/6">
                <PostsView posts={data.posts}/>
            </div>
        </div>
    </div>
</div>
