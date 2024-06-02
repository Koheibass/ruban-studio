import Link from 'next/link';
import { PiPianoKeysFill } from "react-icons/pi";
import { HiOutlineCurrencyYen } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

export default function BottomNav() {
    return (
        <ul className='flex left-0 right-0 z-0 justify-center text-center pt-2 pb-2 bg-[#ffeeee] text-[#a5862f]'>
            <li className='pl-'>
                <Link href='/studio'><PiPianoKeysFill className='text-[30px] ml-7' /></Link>
                <span className='text-[13px]'>スタジオ案内</span>
            </li>
            <li className='pl-8'>
                <Link href='/price'><HiOutlineCurrencyYen className='text-[30px]' /></Link>
                <span className='text-[13px]'>料金</span>
            </li>
            <li className='pl-8'>
                <Link href='/access'><LuMapPin className='text-[30px] ml-2' /></Link>
                <span className='text-[13px]'>アクセス</span>
            </li>
            <li className='pl-8'>
                <Link href='/'><FaStar className='text-[30px] ml-4' /></Link>
                <span className='text-[13px]'>初めての方</span>
            </li>
        </ul>
    );
}
/**
 * <li className='pl-8'>
                <Link href='/'><SlCalender className='text-[30px] ml- pt-1' /></Link>
                <span className='text-[10px]'>ご予約</span>
            </li>
 */