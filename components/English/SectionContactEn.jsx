import { SectionHeader } from "../SectionHeader"

export const SectionContactEn = () => {
    return (
        <section className="pb-8">
            <SectionHeader id="contact" title="Contact" titleEn="contact" />
            <div>
                <div className="text-center my-4 text-[80%] text-[#937a43]">For requests or inquiries regarding Pianist Rina Akahoshi, please contact us here.</div>
                <form action="/Linkpi/contact" method="get" noValidate id="contact-form" className="gap-4 grid-cols-1 grid text-[#937a43]">
                    <div>
                        <label htmlFor="name" className="font-medium block bg-inherit pl-2 pb-1 text-[.875rem] leading-none">Name</label>
                        <input className="border rounded w-[95%] h-6 flex m-auto" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="font-medium block bg-inherit pl-2 pb-1 text-[.875rem] leading-none">E-Mail</label>
                        <input className="border rounded w-[95%] h-6 flex m-auto" id="email" name="email" />
                    </div>
                    <div>
                        <label className="font-medium block bg-inherit pl-2 pb-1 text-[.875rem] leading-none" htmlFor="contact-form-type">Type of inquiry</label>
                        <select name="type" className="rounded w-[95%] h-8 flex m-auto text-[#937a43]">
                            <option value="演奏依頼">Performance request</option>
                            <option value="企業からのご依頼">Requests from companies</option>
                            <option value="その他">others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="font-medium block bg-inherit pl-2 pb-1 text-[.875rem] leading-none">Content of your inquiry</label>
                        <textarea className="border rounded w-[95%] h-12 flex m-auto" id="message" name="message"></textarea>
                    </div>
                    <button className="font-medium text-sm py-2 px-4 justify-center items-center bg-[#fcafaf] rounded-lg w-[96%] mt-3 ml-[7px] text-white" type="submit" data-comform-touched="true">Submit</button>
                </form>
            </div>
        </section>
    )
}