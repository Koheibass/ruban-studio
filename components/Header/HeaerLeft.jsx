import { useLanguage } from '@/utils/language'
import Link from 'next/link'

export const HeaderLeft = () => {
    const { lang } = useLanguage()

    return (
        <div className="lg:w-[18%] lg:mr-auto md:w-[18%] md:mr-auto sm:w-[18%] sm:mr-auto">
            <Link href="/"><img src="/photo/header1.png" width="80%" /></Link>
        </div>
    )
}

/**
 * <div className="flex-1 text-2xl pl-[5px] font-black text-nowrap">
            <Link className="font-castoro text-[#BDA06A] no-underline pl-[5px] lg:pl-[15px] lg:tracking-[0.1rem]" href="/"><img src="/photo/header1.png" /></Link>
        </div>
 */