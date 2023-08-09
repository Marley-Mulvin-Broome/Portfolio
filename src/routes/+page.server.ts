import { sendEmail } from "$lib/emailer";
import { fail, type Actions } from "@sveltejs/kit"

const sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const actions = {
    default: async ({request}) => { 
        const data = await request.formData();
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