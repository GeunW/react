import BoxOfficeData from './BoxOffice.json';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react"; //상태변수

export default function BoxOfficeTb() {
    const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;
    const [selMv, setMv] = useState();


    const handleClick = (mv) => {
        //할당연산자로 state 변수 변경 불가 => 업데이트 함수 변경
        //selMv = mv x사용x
        setMv(mv);
    }

    const myItems = boxList.map(item => (
        <tr className='text-center hover:font-bold h-10 hover:bg-cyan-900 hover:text-white' key={item.rank} onClick={() => { handleClick(item) }}>
            <td className='border'>{item.rank}</td>
            <td className='border'>{item.movieNm}</td>
            <td className='border'>{parseInt(item.salesAmt).toLocaleString()}원</td>
            <td className='border'>{parseInt(item.audiCnt).toLocaleString()}명</td>
            <td className='border flex justify-center items-center h-10'>{parseInt(item.rankInten) === 0 ? '-'
                : parseInt(item.rankInten) > 0 ? <FaArrowUp className='text-red-600 ' />
                    : <FaArrowDown className='text-blue-700 ' />
            }</td>
        </tr>
    ));

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <table className="w-4/5 border">
                <thead>
                    <tr className="text-center bg-blue-800 text-white 
                    ">
                        <th className='border border-white'>순위</th>
                        <th className='border border-white'>영화명</th>
                        <th className='border border-white'>매출액</th>
                        <th className='border border-white'>관객수</th>
                        <th className='border border-white'>증감율</th>
                    </tr>
                </thead>
                <tbody>
                    {myItems}
                </tbody>
                <tfoot></tfoot>
            </table>
            <div className='bg-black text-white w-4/5 text-center h-10 flex items-center justify-center' >
                {selMv === undefined && "영화를 선택하세요"}
                {selMv &&`[${selMv.movieCd}] ${selMv.movieNm} : 누적관객수:${parseInt(selMv.audiAcc).toLocaleString()}명`
                }
            </div>
        </div>
    )
}
