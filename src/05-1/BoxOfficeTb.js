import BoxOfficeData from './BoxOffice.json';
import { useState } from "react"; //상태변수
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo';

export default function BoxOfficeTb() {
    const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;
    const [selMv, setMv] = useState();


    // const handleClick = (mv) => {
    //     //할당연산자로 state 변수 변경 불가 => 업데이트 함수 변경
    //     //selMv = mv x사용x
    //     setMv(mv);
    // }

    // const myItems = boxList.map(item => (
    //     <tr className='text-center hover:font-bold h-10 hover:bg-cyan-900 hover:text-white' key={item.rank} onClick={() => { handleClick(item) }}>
    //         <td className='border'>{item.rank}</td>
    //         <td className='border'>{item.movieNm}</td>
    //         <td className='border'>{parseInt(item.salesAmt).toLocaleString()}원</td>
    //         <td className='border'>{parseInt(item.audiCnt).toLocaleString()}명</td>
    //         <td className='border flex justify-center items-center h-10'>{parseInt(item.rankInten) === 0 ? '-'
    //             : parseInt(item.rankInten) > 0 ? <FaArrowUp className='text-red-600 ' />
    //                 : <FaArrowDown className='text-blue-700 ' />
    //         }</td>
    //     </tr>
    // ));

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <table className="w-4/5 border">

                <BoxOfficeThead/>

                <BoxOfficeTbody boxList={boxList} setMv ={setMv}/>

                <tfoot></tfoot>
            </table>
           <BoxOfficeInfo selMv={selMv}/>
        </div>
    )
}
