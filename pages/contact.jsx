import * as React from 'react';

import { AppNav } from '@/components/AppNav';
import Link from 'next/link';
import { Footer } from '@/components/Footer';



export default function Contact() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto">
            <AppNav />
            <main className="grow bg-[#ffffff] px-4 lg:px-20" id="use">
                <section className="pb-8">
                    <div>
                        <div className="text-center my-4 text-[#937a43] lg:text-[100%] py-4">ピアノスタジオ リュバンへのお問い合わせは、<br />こちらからお願いいたします。</div>
                        <form action="https://hyperform.jp/api/W0ja7ej9" method="post" noValidate id="contact-form" className="gap-4 grid-cols-1 grid text-[#937a43]">
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
                                        <option value="予約の変更">予約の変更</option>
                                        <option value="企業からのご依頼">企業からのご依頼</option>
                                        <option value="その他">その他</option>
                                    </select>
                                </div>
                            </div>
                            <div className='tracking-[4px] leading-[28px] text-left -indent-5 px-6 ml-3'>※予約の変更の際は、変更希望の日時の空き状況を確認の上、予約時と同じ<strong>お名前</strong>、<strong>メールアドレス</strong>を記載し、<strong>変更前の予約日時</strong>を以下のお問い合わせの内容にご記入ください。</div>
                            <div>
                                <label htmlFor="message" className="font-medium block bg-inherit text-[.875rem] leading-none mb-3">お問い合わせの内容</label>
                                <textarea className="border rounded w-full flex m-auto h-[120px] lg:h-[120px] px-2 py-2 outline outline-1" id="message" name="message"></textarea>
                            </div>

                            <button className="font-medium text-sm py-2 px-4 justify-center items-center bg-[#fcafaf] rounded-lg w-full mt-4 text-white" type="submit" data-comform-touched="true">送信</button>
                        </form>
                    </div >
                </section >
                <div className='flex justify-center pt-2 pb-6 leading-[28px] text-[13px] underline text-[#ff9a9a]'><Link href="/">Topに戻る</Link></div>
            </main >
            <Footer />
        </div >
    )
}
