import { useLanguage } from '@/utils/language'
import Link from 'next/link'

export const HeaderLeft = () => {
    const { lang } = useLanguage()

    return (

        <div className="w-[40%] mr-auto sm:w-[15%] sm:mr-auto">
            <Link href="/"><img src="/photo/header1.png" /></Link>
        </div>
    )
}
