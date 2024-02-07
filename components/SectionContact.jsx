import { SectionHeader } from "./SectionHeader"

export const SectionContact = () => {
    return (
        <section className="pb-8">
            <SectionHeader id="contact" title="お問い合わせ" titleEn="contact" />
            <div>
                <div className="text-center my-4 text-[80%] text-[#937a43]">ピアニスト 赤星里奈へのご依頼・お問い合わせなどは、<br />こちらからお願い致します。</div>
                <form action="/Linkpi/contact" method="get" noValidate id="contact-form" className="gap-4 grid-cols-1 grid text-[#937a43]">
                    <div>
                        <label htmlFor="name" className="font-medium block bg-inherit pl-2 pb-1 text-[.875rem] leading-none">お名前</label>
                        <input className="border rounded w-[95%] h-6 flex m-auto" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-medium block bg-inherit pl-2 pb-1 text-[.875rem] leading-none">メールアドレス</label>
                        <input className="border rounded w-[95%] h-6 flex m-auto" id="email" name="email" />
                    </div>
                    <div>
                        <label className="font-medium block bg-inherit pl-2 pb-1 text-[.875rem] leading-none" htmlFor="contact-form-type">お問い合わせの種別</label>
                        <select name="type" className="rounded w-[95%] h-8 flex m-auto text-[#937a43]">
                            <option value="演奏依頼">演奏依頼</option>
                            <option value="企業からのご依頼">企業からのご依頼</option>
                            <option value="その他">その他</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="font-medium block bg-inherit pl-2 pb-1 text-[.875rem] leading-none">お問い合わせの内容</label>
                        <textarea className="border rounded w-[95%] h-12 flex m-auto" id="message" name="message"></textarea>
                    </div>
                    <button className="font-medium text-sm py-2 px-4 justify-center items-center bg-[#fcafaf] rounded-lg w-[96%] mt-3 ml-[7px] text-white" type="submit" data-comform-touched="true">送信</button>
                </form>
            </div>
        </section>
    )
}