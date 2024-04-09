import { SectionHeader } from "../SectionHeader"

export const SectionContactEn = () => {
    return (
        <section className="pb-8">
            <SectionHeader id="contact" title="Contact" titleEn="contact" />
            <div>
                <div className="text-center my-4 text-[80%] text-[#937a43] lg:text-[100%]">For requests or inquiries regarding Pianist Rina Akahoshi, please contact us here.</div>
                <form action="/api/contact" method="get" noValidate id="contact-form" className="gap-4 grid-cols-1 grid text-[#937a43]">
                    <div>
                        <label htmlFor="name" className="font-medium block bg-inherit text-[.875rem] leading-none mb-2">Name</label>
                        <input className="border rounded w-full py-2 px-2 flex m-auto outline outline-1" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-medium block bg-inherit text-[.875rem] leading-none mb-2">E-Mail</label>
                        <input className="border rounded w-full flex m-auto py-2 px-2 outline outline-1" id="email" name="email" />
                    </div>
                    <div>
                        <label className="font-medium block bg-inherit text-[.875rem] leading-none mb-2" htmlFor="contact-form-type">Type of inquiry</label>
                        <div className="relative">
                            <select name="type" className="rounded w-full flex m-auto text-[#937a43] px-2 py-2 outline outline-1">
                                <option value="演奏依頼">Performance request</option>
                                <option value="企業からのご依頼">Requests from companies</option>
                                <option value="その他">others</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="font-medium block bg-inherit text-[.875rem] leading-none mb-2">Content of your inquiry</label>
                        <textarea className="border rounded w-full flex m-auto lg:h-20 px-2 py-2 outline outline-1" id="message" name="message"></textarea>
                    </div>
                    <input type="hidden" name="favorite_color" value="" />
                    <button className="font-medium text-sm py-2 px-4 justify-center items-center bg-[#fcafaf] rounded-lg w-full mt-3 text-white" type="submit" data-comform-touched="true">Submit</button>
                </form>
            </div>
        </section>
    )
}

/**
 * <div className="absolute right-3 top-1 w-6 lg:right-10 lg:top-2"><img src="/icon/PhCaretUpDown.svg"></img></div>
 */