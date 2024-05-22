import Link from 'next/link';
import { PiPianoKeysFill } from "react-icons/pi";
import { HiOutlineCurrencyYen } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function BottomNav() {
    return (
        <ul className='flex bg-white  fixed bottom-0 left-0 right-0 z-10 justify-center text-center pt-2 pb-2'>
            <li className='pl-'>
                <Link href='/'><PiPianoKeysFill className='text-[30px] ml-8' /></Link>
                <span className='text-[15px]'>スタジオ案内</span>
            </li>
            <li className='pl-8'>
                <Link href='/'><HiOutlineCurrencyYen className='text-[30px]' /></Link>
                <span className='text-[15px]'>料金</span>
            </li>
            <li className='pl-8'>
                <Link href='/'><LuMapPin className='text-[30px] ml-4' /></Link>
                <span className='text-[15px]'>アクセス</span>
            </li>
            <li className='pl-8'>
                <Link href='/'><FaStar className='text-[30px] ml-5' /></Link>
                <span className='text-[15px]'>初めての方</span>
            </li>
            <li className='pl-8'>
                <Link href='/'><SlCalender className='text-[30px] ml-2 pt-1' /></Link>
                <span className='text-[15px]'>ご予約</span>
            </li>
        </ul>
    );
}