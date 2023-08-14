import { env } from "$env/dynamic/private";
import { sendEmail } from "$lib/emailer";
import { fail, type Actions } from "@sveltejs/kit"

export const actions = {
    default: async ({request}) => { 
        const data = await request.formData();

        const captchaResponse = await verifyCaptcha(data.get('captchaToken') as string, env.CURRENT_HOST);

        if (!captchaResponse) {
            return fail(401, { body: 'ReCaptcha Failed to authorize, please try again'});
        }

        const name = data.get('nameInput') as string;
        const email = data.get('emailInput') as string;
        const message = data.get('messageInput') as string;

        if (!name) {
            return fail(400, { name, missing: true});
        }

        if (!email) {
            return fail(400, { email, missing: true});
        }

        if (!message) {
            return fail(400, { message, missing: true});
        }

        const response = await sendEmail(name, email, message);

        if (response.rejected.length > 0) {
            return fail(400, { success: false });
        }

        return {
            success: true
        }
    }
} satisfies Actions;

/**
* Calls the captcha API endpoint, returns true if captcha is succesful
* 
* @param token ReCaptcha Token from the client
* @param host URL of the site making the request
* @returns Promise containing captcha's success status
*/
async function verifyCaptcha(token: string, host: string): Promise<boolean> {
    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${env.CAPTCHA_SECRET}&response=${token}&remoteip=${host}`, { method: 'POST' });

    const data: { success: boolean; } = await res.json();
    return data.success;
}