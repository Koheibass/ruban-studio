import { SectionHeader } from "./SectionHeader"

export const SectionContact = () => {
    return (
        <section className="pb-8">
            <SectionHeader id="contact" title="お問い合わせ" titleEn="contact" />
            <div>
                <div className="text-center my-4 text-[80%] text-[#937a43] lg:text-[100%]">ピアニスト 赤星里奈へのご依頼・お問い合わせなどは、<br />こちらからお願い致します。</div>
                <form action="/api/contact" method="get" noValidate id="contact-form" className="gap-4 grid-cols-1 grid text-[#937a43]">
                    <div>
                        <label htmlFor="name" className="font-medium block bg-inherit text-[.875rem] leading-none mb-2">お名前</label>
                        <input className="border rounded w-full py-2 px-2 flex m-auto outline outline-1" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-medium block bg-inherit text-[.875rem] leading-none mb-2">メールアドレス</label>
                        <input className="border rounded w-full flex m-auto py-2 px-2 outline outline-1" id="email" name="email" />
                    </div>
                    <div>
                        <label className="font-medium block bg-inherit text-[.875rem] leading-none mb-2" htmlFor="type">お問い合わせの種別</label>
                        <div className="relative">
                            <select name="type" className="rounded w-full flex m-auto text-[#937a43] px-2 py-2 outline outline-1">
                                <option value="演奏依頼">演奏依頼</option>
                                <option value="企業からのご依頼">企業からのご依頼</option>
                                <option value="その他">その他</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="font-medium block bg-inherit text-[.875rem] leading-none mb-2">お問い合わせの内容</label>
                        <textarea className="border rounded w-full flex m-auto lg:h-20 px-2 py-2 outline outline-1" id="message" name="message"></textarea>
                    </div>
                    <input type="hidden" name="favorite_color" value="" />
                    <button className="font-medium text-sm py-2 px-4 justify-center items-center bg-[#fcafaf] rounded-lg w-full mt-3 text-white" type="submit" data-comform-touched="true">送信</button>
                </form>
            </div >
        </section >
    )
}