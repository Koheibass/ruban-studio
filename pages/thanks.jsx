import Link from "next/link"

export default function Thanks() {
    return (
        <div className="flex flex-col relative min-h-lvh font-noto text-center">
            <h1>【赤星里奈】お問い合わせありがとうございます</h1>
            <main className="grow bg-[#fefaff] px-4 lg:px-20 py-10">
                <p>この度は、お問い合わせいただきまして誠にありがとうございます。</p>
                <p>担当者より改めてご連絡させていただきます。</p>
                <p>※ 治療のご提案につきましては、現在多数のご連絡をいただいているため、必ずしもご返信できかねますことご了承ください。</p>
                <div className="text-center my-4">
                    <Link className="underline text-[#ff9a9a]" href="/">Topに戻る</Link>
                </div>
            </main>
        </div>
    )
}