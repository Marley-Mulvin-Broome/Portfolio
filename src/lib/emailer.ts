import { env } from '$env/dynamic/private';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: env.EMAIL,
        pass: env.EMAIL_PASSWORD
    } 
});

export async function sendEmail(name: string, email: string, message: string) {
    const options = {
        from: env.EMAIL,
        to: env.EMAIL,
        subject: `PORTFOLIO: New message from ${name}`,
        html: '<p>Message from: ' + name + '</p><p>Email: ' + email + '</p><p>Message: ' + message + '</p>'
    }

    const result = await transporter.sendMail(options);

    return result;
}