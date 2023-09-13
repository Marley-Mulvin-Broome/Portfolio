<script lang="ts">
	import { enhance } from "$app/forms";
    import { ReCaptcha } from '@mac-barrett/svelte-recaptcha';
	import { FormStatus } from "$lib/types/formStatus";
	import Spinner from "./Spinner.svelte";
	import { env } from "$env/dynamic/public";

    export let action = "";

    let formStatus: FormStatus = FormStatus.Idle;

    let name = "";
    let email = "";

    let errorBody = "";

    let SITE_KEY = env.PUBLIC_CAPTCHA_KEY;
    let Captcha: ReCaptcha;
</script>

{#if formStatus === FormStatus.Idle}
    <div class="mx-auto max-w-screen-md">
        <form class="grid grid-cols-1" method="POST" use:enhance={({ formData }) => {
            errorBody = "";
            formStatus = FormStatus.Loading;
            const token = Captcha.getRecaptchaResponse();
            formData.append('captchaToken', token);

            if (token.length === 0) {
                formStatus = FormStatus.Error;
                errorBody = "Please complete the captcha."
                return;
            }

            return async ({ result }) => {
                if (result.status === 200) {
                    formStatus = FormStatus.Success;
                } else {
                    formStatus = FormStatus.Error;
                }
            }
        }} {action}>
            <div class="mb-4">
                <label class="block text-lg" for="nameInput">Your Name</label>
                <input bind:value={name} class="bg-transparent border-0 active:!outline-none focus:active:!outline-none border-b-2 border-emerald-700 block w-full focus:border-emerald-500 focus:outline-none" required type="text" name="nameInput" id="nameInput" placeholder="Marley Mulvin Broome @ Freelight Software"/>
            </div>
            <div class="mb-4">
                <label class="block text-lg" for="emailInput">Your Email</label>
                <input bind:value={email} class="bg-transparent border-b-2 border-emerald-700 block w-full focus:border-emerald-500 focus:outline-none" required type="email" name="emailInput" id="emailInput" placeholder="marley.developer@gmail.com"/>    
            </div>
            <div class="mb-4">
                <label class="block text-lg" for="messageInput">Your Message</label>
                <textarea rows="6" class="bg-transparent border-b-2 border-emerald-700 block w-full focus:border-emerald-500 focus:outline-none" required name="messageInput" id="messageInput" placeholder="Leave a comment..."></textarea>
            </div>
            
            <div class="mx-auto mb-4">
                <ReCaptcha bind:this={Captcha} {SITE_KEY} captchaStyle={{theme: 'dark', size: 'normal'}} />
            </div>

            <button class="rounded border-2 border-white w-20 mx-auto hover:bg-white hover:text-black transition-colors" type="submit">Send</button>
        </form>
    </div>
{:else if formStatus === FormStatus.Loading}
    <div class="w-full h-96">
        <div class="flex justify-center align-middle">
            <Spinner fillColour="fill-emerald-500"/>
        </div>
    </div>
    
{:else if formStatus === FormStatus.Success}
    <div class="flex flex-col justify-center">
        <p class="text-center self-center">Message sent!</p>
        <button class="rounded border-2 border-white w-fit p-1 mx-auto hover:bg-white hover:text-black transition-colors" on:click={() => {formStatus = FormStatus.Idle}}>Send another message</button>
    </div>
    
{:else}
    <div class="mx-auto text-center lg:w-fit h-96">
        <h3 class="text-4xl font-medium mb-2">Oops ...</h3>
        <p class="text-xl pb-2">{errorBody ?? "An error occurred 😔"}</p>
        <button class="rounded border-2 border-white w-fit p-1 mx-auto hover:bg-white hover:text-black transition-colors" on:click={() => {formStatus = FormStatus.Idle}}>Try again</button>
    </div>
{/if}
