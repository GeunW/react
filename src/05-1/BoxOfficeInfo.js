

export default function BoxOfficeInfo({selMv}) {
    return (
        <div className='bg-black text-white w-4/5 text-center h-10 flex items-center justify-center' >
            {selMv === undefined && "영화를 선택하세요"}
            {selMv && `[${selMv.movieCd}] ${selMv.movieNm} : 누적관객수:${parseInt(selMv.audiAcc).toLocaleString()}명`
            }
        </div>
        )
}
