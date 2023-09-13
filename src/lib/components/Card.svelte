<script lang="ts">
    export let img: string;
    export let href: string;
    export let title: string;
</script>

<a {href} class="max-w-sm  rounded-lg shadow bg-gray-800 border-gray-700">
    <img class="rounded-t-lg" src={img} alt="blog-{title}" />
    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">{title}</h5>
        <slot/>
    </div>
</a>