import { SectionHeader } from "./SectionHeader"

export const SectionContact = () => {
    return (
        <section className="pb-8">
            <SectionHeader id="contact" title="お問い合わせ" titleEn="contact" />
            <div>
                <div className="text-center my-4 text-[80%] text-[#937a43] lg:text-[100%]">ピアニスト 赤星里奈へのご依頼・お問い合わせなどは、<br />こちらからお願い致します。</div>
                <form action="/api/contact" method="get" noValidate id="contact-form" className="gap-4 grid-cols-1 grid text-[#937a43]">
                    <div>
                        <label htmlFor="name" className="font-medium block bg-inherit pl-2 lg:pl-8 pb-1 text-[.875rem] leading-none lg:mb-2">お名前</label>
                        <input className="border rounded w-[95%] h-6 flex m-auto lg:h-8" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-medium block bg-inherit pl-2 lg:pl-8 pb-1 text-[.875rem] leading-none lg:mb-2">メールアドレス</label>
                        <input className="border rounded w-[95%] h-6 flex m-auto lg:h-8" id="email" name="email" />
                    </div>
                    <div>
                        <label className="font-medium block bg-inherit pl-2 lg:pl-8 pb-1 text-[.875rem] leading-none lg:mb-2" htmlFor="type">お問い合わせの種別</label>
                        <div className="relative">
                            <div className="absolute right-3 top-1 w-6 lg:right-10 lg:top-2"><img src="/icon/PhCaretUpDown.svg"></img></div>
                            <select name="type" className="rounded w-[95%] h-8 flex m-auto text-[#937a43] lg:h-10">
                                <option value="演奏依頼">演奏依頼</option>
                                <option value="企業からのご依頼">企業からのご依頼</option>
                                <option value="その他">その他</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="font-medium block bg-inherit pl-2 lg:pl-8 pb-1 text-[.875rem] leading-none lg:mb-2">お問い合わせの内容</label>
                        <textarea className="border rounded w-[95%] h-12 flex m-auto lg:h-20" id="message" name="message"></textarea>
                    </div>
                    <button className="font-medium text-sm py-2 px-4 justify-center items-center bg-[#fcafaf] rounded-lg w-[96%] lg:ml-8 lg:w-[95.3%] mt-3 ml-[7px] text-white" type="submit" data-comform-touched="true">送信</button>
                </form>
            </div>
        </section>
    )
}