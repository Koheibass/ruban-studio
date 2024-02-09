export const EmailTemplate = ({
    name,
    email,
    message,
    type
}) => (
    <div>
        <p>{name}様</p>
        <p>この度は、お問い合わせいただきまして誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受付いたしました。</p>
        <p>担当者より改めてご連絡させていただきます。</p>
        <div><span>お名前：</span><strong>{name}様</strong></div><br></br>
        <div><span>メール：</span><strong>{email}</strong></div><br></br>
        <div><span>お問い合わせの種別：</span><strong>{type}</strong></div><br></br>
        <div><span>お問い合わせ内容：</span><strong>{message}</strong></div>
    </div>
);