// import BoxOfficeData from './BoxOffice.json';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import TailInput from '../UI/TailInput';

export default function BoxOffice() {
    const [boxList, setBoxList] = useState();
    const [trs, setTrs] = useState();
    


    //boxOffice 데이터 fetch
    const getData = (dt) => {
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`;

        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            .then(data => setBoxList(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err))
    }
    const boxRef = useRef();
    const handleSelDate = () => {
        // console.log(boxRef.current.value.replaceAll('-', ''));
        getData(boxRef.current.value.replaceAll('-', ''));
    }

    useEffect(() => {
        if (!boxList) return;

        const tm = boxList.map(item =>
            <tr className='text-center hover:font-bold h-10 hover:bg-cyan-900 hover:text-white' key={item.rank} onClick={() => { handleClick(item) }}>
                <td className='border'>{item.rank}</td>
                <td className='border'>{item.movieNm}</td>
                <td className='border'>{parseInt(item.salesAmt).toLocaleString()}원</td>
                <td className='border'>{parseInt(item.audiCnt).toLocaleString()}명</td>
                <td className='border flex justify-center items-center h-10'>
                    {parseInt(item.rankInten) === 0 ? '-'
                        : parseInt(item.rankInten) > 0 ? <FaArrowUp className='text-red-600 ' />
                            : <FaArrowDown className='text-blue-700 ' />
                    }</td>
            </tr>)


        setTrs(tm)
    }, [boxList]);

    const handleClick = (mv) => {
        //할당연산자로 state 변수 변경 불가 => 업데이트 함수 변경
        //selMv = mv x사용x
        setBoxList(mv);
    }

    return (
        <div className="w-full flex flex-col
                         justify-center items-center">
            <div className='w-4/5 flex 
                            justify-end items-center'>

                <span className='text-sm mx-5'>날짜 선택 :</span>
                <div className='flex'>
                    <TailInput type="date"
                        inputRef={boxRef}
                        handleChange={handleSelDate}
                        ph="" />
                </div>
            </div>
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
                    {trs}
                </tbody>
                <tfoot></tfoot>
            </table>
            <div className='bg-black text-white w-4/5 text-center h-10 flex items-center justify-center' >
                {boxList === undefined && "영화를 선택하세요"}
                {boxList && `[${boxList.movieCd}] ${boxList.movieNm} : 누적관객수:${parseInt(boxList.audiAcc).toLocaleString()}명`
                }
            </div>
        </div>




    )
}
