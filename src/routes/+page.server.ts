import { sendEmail } from "$lib/emailer";
import { fail, type Actions } from "@sveltejs/kit"

export const actions = {
    default: async ({request}) => { 
        const data = await request.formData();
        const name = data.get('nameInput') as string;
        const email = data.get('nameInput') as string;
        const message = data.get('messageInput') as string;

        console.log(name, email, message)

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

        if (response.rejected) {
            return fail(500, { success: false });
        }

        return {
            success: true
        }
    }
} satisfies Actions;