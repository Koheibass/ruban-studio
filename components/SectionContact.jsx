import { SectionHeader } from "./SectionHeader"

export const SectionContact = () => {
    return (
        <section className="section_contact">
            <SectionHeader id="contact" title="お問い合わせ" titleEn="contact" />
            <div>
                <div className="contact__annotation">ピアニスト 赤星里奈へのご依頼・お問い合わせなどは、<br />こちらからお願い致します。</div>
                <form action="/Linkpi/contact" method="get" noValidate id="contact-form" className="contact-form">
                    <div>
                        <label htmlFor="name" className="contact-form2">お名前</label>
                        <input className="contact__frame" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="contact-form2">メールアドレス</label>
                        <input className="contact__frame" id="email" name="email" />
                    </div>
                    <div>
                        <label className="contact-form2" htmlFor="contact-form-type">お問い合わせの種別</label>
                        <select name="type" className="contact__frame__type">
                            <option value="演奏依頼">演奏依頼</option>
                            <option value="企業からのご依頼">企業からのご依頼</option>
                            <option value="その他">その他</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="contact-form2">お問い合わせの内容</label>
                        <textarea className="contact__frame__message" id="message" name="message"></textarea>
                    </div>
                    <button className="contact__button" type="submit" data-comform-touched="true">送信</button>
                </form>
            </div>
        </section>
    )
}