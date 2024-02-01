import { SectionHeader } from "../SectionHeader"

export const SectionContactEn = () => {
    return (
        <section className="section_contact">
            <SectionHeader id="contact" title="Contact" titleEn="contact" />
            <div>
                <div className="contact__annotation">For requests or inquiries regarding Pianist Rina Akahoshi, please contact us here.</div>
                <form action="/Linkpi/contact" method="get" noValidate id="contact-form" className="contact-form">
                    <div>
                        <label htmlFor="name" className="contact-form2">Name</label>
                        <input className="contact__frame" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="contact-form2">E-Mail</label>
                        <input className="contact__frame" id="email" name="email" />
                    </div>
                    <div>
                        <label className="contact-form2" htmlFor="contact-form-type">Type of inquiry</label>
                        <select name="type" className="contact__frame__type">
                            <option value="演奏依頼">Performance request</option>
                            <option value="企業からのご依頼">Requests from companies</option>
                            <option value="その他">others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="contact-form2">Content of your inquiry</label>
                        <textarea className="contact__frame__message" id="message" name="message"></textarea>
                    </div>
                    <button className="contact__button" type="submit" data-comform-touched="true">Submit</button>
                </form>
            </div>
        </section>
    )
}