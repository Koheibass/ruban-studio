import Link from 'next/link';
import { PiPianoKeysFill } from "react-icons/pi";
import { HiOutlineCurrencyYen } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

export default function BottomNav() {
    return (
        <ul className='flex left-0 right-0 z-0 justify-center text-center pt-3 pb-2 bg-[#ffeeee] text-[#a5862f]'>
            <li className='pl-2'>
                <Link href='/studio'><PiPianoKeysFill className='text-[30px] ml-[22px]' /></Link>
                <span className='text-[12px]'>スタジオ案内</span>
            </li>
            <li className='pl-8'>
                <Link href='/price'><HiOutlineCurrencyYen className='text-[30px]' /></Link>
                <span className='text-[12px]'>料金</span>
            </li>
            <li className='pl-11'>
                <Link href='/access'><LuMapPin className='text-[30px] ml-2' /></Link>
                <span className='text-[12px]'>アクセス</span>
            </li>
            <li className='pl-5 pr-2'>
                <Link href='/use'><FaStar className='text-[30px] ml-5' /></Link>
                <span className='text-[12px]'>ご利用の流れ</span>
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