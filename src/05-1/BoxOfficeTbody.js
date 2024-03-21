import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function BoxOfficeTbody(props) {
//console.log(props)
    const trs = props.boxList.map(item =>  
        <tr className='text-center hover:font-bold h-10 hover:bg-cyan-900 hover:text-white' key={item.rank} 
        onClick={() => { handleClick(item) }}>
            <td className='border'>{item.rank}</td>
            <td className='border'>{item.movieNm}</td>
            <td className='border'>{parseInt(item.salesAmt).toLocaleString()}원</td>
            <td className='border'>{parseInt(item.audiCnt).toLocaleString()}명</td>
            <td className='border flex justify-center items-center h-10'>{parseInt(item.rankInten) === 0 ? '-'
                : parseInt(item.rankInten) > 0 ? <FaArrowUp className='text-red-600 ' />
                    : <FaArrowDown className='text-blue-700 ' />
            }</td>
        </tr>
     );
    // props.boxList.map(item => {console.log(item)}) ;

    // console.log(trs)
    const handleClick = (mv) => {
        console.log(mv)
        //할당연산자로 state 변수 변경 불가 => 업데이트 함수 변경
        //selMv = mv x사용x
        props.setMv(mv);
    }

    return (
    <tbody>
        {trs}
    </tbody>
  )
}
