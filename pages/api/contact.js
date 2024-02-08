// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    const { name, email, type, message } = req.query
    const { data, error } = await resend.emails.send({
        from: 'coji@techtalk.jp',
        to: [email],
        subject: 'Hello world',
        text: `name: ${name}
email: ${email}
type: ${type}
message: ${message}
`,
    });

    if (error) {
        return res.status(400).json(error);
    }

    res.redirect(307, '/thanks')
}
