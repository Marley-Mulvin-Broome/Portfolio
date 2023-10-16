import { b as private_env } from "../../chunks/shared-server.js";
import * as nodemailer from "nodemailer";
import { f as fail } from "../../chunks/index.js";
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: private_env.EMAIL,
    pass: private_env.EMAIL_PASSWORD
  }
});
async function sendEmail(name, email, message) {
  const options = {
    from: private_env.EMAIL,
    to: private_env.EMAIL,
    subject: `PORTFOLIO: New message from ${name}`,
    html: "<p>Message from: " + name + "</p><p>Email: " + email + "</p><p>Message: " + message + "</p>"
  };
  const result = await transporter.sendMail(options);
  return result;
}
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const captchaResponse = await verifyCaptcha(data.get("captchaToken"), private_env.CURRENT_HOST);
    if (!captchaResponse) {
      return fail(401, { body: "ReCaptcha Failed to authorize, please try again" });
    }
    const name = data.get("nameInput");
    const email = data.get("emailInput");
    const message = data.get("messageInput");
    if (!name) {
      return fail(400, { name, missing: true });
    }
    if (!email) {
      return fail(400, { email, missing: true });
    }
    if (!message) {
      return fail(400, { message, missing: true });
    }
    const response = await sendEmail(name, email, message);
    if (response.rejected.length > 0) {
      return fail(400, { success: false });
    }
    return {
      success: true
    };
  }
};
async function verifyCaptcha(token, host) {
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${private_env.CAPTCHA_SECRET}&response=${token}&remoteip=${host}`, { method: "POST" });
  const data = await res.json();
  return data.success;
}
export {
  actions
};
