import { SectionHeader } from "./SectionHeader"

export const SectionContact = () => {
    return (
        <section class="section_contact">
            <SectionHeader id="contact" title="お問い合わせ" titleEn="contact" />
            <div>
                <div class="contact__annotation">ピアニスト 赤星里奈へのご依頼・お問い合わせなどは、<br />こちらからお願い致します。</div>
                <form action="/Linkpi/contact" method="get" novalidate id="contact-form" class="contact-form">
                    <div>
                        <label for="name" class="contact-form2">お名前</label>
                        <input class="contact__frame" id="name" name="name" />
                    </div>
                    <div>
                        <label for="email" class="contact-form2">メールアドレス</label>
                        <input class="contact__frame" id="email" name="email" />
                    </div>
                    <div>
                        <label class="contact-form2" for="contact-form-type">お問い合わせの種別</label>
                        <select name="type" class="contact__frame__type">
                            <option value="演奏依頼">演奏依頼</option>
                            <option value="企業からのご依頼">企業からのご依頼</option>
                            <option value="その他">その他</option>
                        </select>
                    </div>
                    <div>
                        <label for="message" class="contact-form2">お問い合わせの内容</label>
                        <textarea class="contact__frame__message" id="message" name="message"></textarea>
                    </div>
                    <button class="contact__button" type="submit" data-comform-touched="true">送信</button>
                </form>
            </div>
        </section>
    )
}