<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "../../routes/$types";

    export let action = "";

    export let form: ActionData;
</script>

<form class="" method="POST" use:enhance {action}>
    <label for="nameInput">Name</label>
    <input class="text-black" required type="text" name="nameInput" id="nameInput" placeholder="Name"/>
    <label for="emailInput">Email</label>
    <input class="text-black" required type="email" name="emailInput" id="emailInput" placeholder="Email"/>
    <label for="messageInput">Message</label>
    <textarea class="text-black" required name="messageInput" id="messageInput" placeholder="Message"></textarea>
    <button type="submit">Send</button>
</form>

{#if form}
    <p>{JSON.stringify(form)}</p>
{/if}
