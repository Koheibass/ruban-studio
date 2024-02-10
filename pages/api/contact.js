// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    const { name, email, type, message } = req.query
    const { data, error } = await resend.emails.send({
        from: 'info2@rina-akaboshi.com',
        to: [email],
        bcc: 'kouheihand@yahoo.co.jp',
        subject: '【赤星里奈】お問い合わせありがとうございます',
        react: EmailTemplate({ name, email, message, type })
    });

    if (error) {
        return res.status(400).json(error);
    }

    res.redirect(307, '/Thanks')
}
