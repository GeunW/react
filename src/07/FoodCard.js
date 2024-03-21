import bank from './img/bank.png';
import market from './img/market.png';
import busan from './img/busan.png';
import { useState } from 'react';

export default function FoodCard({ fobj }) {

    // const fobj = {
    //     "구분": "광역지원센터",
    //     "시군구": "부산시",
    //     "사업장명": "부산광역푸드뱅크",
    //     "신고기준": "당연",
    //     "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    //     "연락처(대표번호)": "051-791-1377",
    //     "팩스번호": "051-714-3096",
    //     "운영주체 분류": "1. 사회복지법인",
    //     "운영주체명": "부산광역시사회복지협의회"
    // };

    const fimg = fobj["구분"] === "기초푸드뱅크" ? bank :
        fobj["구분"] === "기초푸드마켓" ? market : busan;

    const [isClick, setIsClick] = useState(false);

    const handleIsClick = () => {
        setIsClick(!isClick);
    };

    return (
        <div className='w-11/12 border flex' onClick={handleIsClick}>
            <div className='w-1/5 max-w-xl flex flex-col items-center justify-center'>
                <img src={fimg} />
            </div>
            <div className='flex flex-col w-4/5 justify-between'>
                <h1 className='font-bold text-xl text-slate-700 h-1/4'>
                    {fobj['사업장명']}</h1>
                <h2 className='font-bold text-lg text-slate-500 h-1/4'>
                    {fobj['운영주체명']}</h2>
                <p className='font-bold text-xs text-slate-400 truncate'>
                    {fobj['사업장 소재지']}</p>
                <div className='flex items-center bg-slate-600 w-full text-white text-xs h-6 '>
                    { isClick && `Tel : ${fobj['연락처(대표번호)']}, Fax : ${fobj['팩스번호']}`}</div>
            </div>
        </div>
    )
}
