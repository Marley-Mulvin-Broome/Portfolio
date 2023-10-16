<script lang="ts">
	import SectionTitle from "$lib/components/SectionTitle.svelte";
	import PostsView from "$lib/components/blog/PostsView.svelte";

    export let data;
</script>

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
